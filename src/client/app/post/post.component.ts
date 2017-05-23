import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from '../shared/post/post';
import { PostService } from '../shared/post/post.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { PostListComponent } from '../shared/post-list/post-list.component';

@Component({
  moduleId: module.id,
  selector: 'wb-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
  animations: [
    trigger('coverState', [
      state('inactive', style({opacity: 0})),
      state('active', style({opacity: 1})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class PostComponent implements OnInit {

  post: Post;
  loading: boolean = true;
  errorMessage: string;
  state: string = 'inactive';
  relatedPosts: Post[] = [];
  @ViewChild(PostListComponent)
  private postList: PostListComponent;

  constructor(public postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.loadPost(params['title']);
    });
  }

  loadPost(title: string) {
    this.postService.getPost(title).subscribe(post => {
        this.post = post;
        setTimeout(() => {
          this.loadRelatedPosts();
        }, 200);
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
        setTimeout(() => {
          this.state = 'active';
        }, 200);
      });
  }

  loadRelatedPosts(): void {
    for (let r of this.post.relatedPosts) {
      this.postService.getPostById(r).subscribe(rp => {
        this.relatedPosts.push(rp);
      });
    }
    this.postList.staggeringPosts = this.relatedPosts;
  }

}

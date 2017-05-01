import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from '../shared/post/post';
import { PostService } from '../shared/post/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPost().subscribe(post => {
        this.post = post;
        this.loadRelatedPosts();
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
    for (let r in this.post.relatedPosts) {
      this.postService.getPostById(r).subscribe(rp => {
        this.relatedPosts.push(rp);
        console.log(this.relatedPosts);
      });
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Post, PostService } from '../shared/post/index';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { PostListComponent } from '../shared/post-list/post-list.component';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  moduleId: module.id,
  selector: 'wb-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
})
export class PostComponent implements OnInit {

  post: Post;
  loading: boolean = true;
  errorMessage: string;
  state: string = 'inactive';
  relatedPosts: Post[] = [];

  constructor(public postService: PostService, private route: ActivatedRoute, private loaderService: LoaderService) {
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
        setTimeout(() => {
          this.state = 'active';
          this.loaderService.hide();
          this.loading = false;
        }, 400);
      });
  }

  loadRelatedPosts(): void {
    this.relatedPosts = [];
    for (let r of this.post.relatedPosts) {
      this.postService.getPostById(r).subscribe(rp => {
        this.relatedPosts.push(rp);
      });
    }
  }

}

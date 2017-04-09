import { Component, EventEmitter, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/post';

@Component({
  moduleId: module.id,
  selector: 'wb-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css'],
})
export class PostListComponent implements OnInit {

  loading: boolean = false;
  errorMessage: string;
  posts: Post[];
  offset: number = 0;
  limit: number = 6;

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPosts(this.offset, this.limit).subscribe(posts => {
        this.posts = posts.response;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }


}

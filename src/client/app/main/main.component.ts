import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post/post';
import { PostService } from '../shared/post/post.service';

@Component({
  moduleId: module.id,
  selector: 'wb-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
})
export class MainComponent implements OnInit {

  loading: boolean;
  errorMessage: string;
  offset: number = 0;
  limit: number = 6;
  posts: Post[];

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPosts(this.offset, this.limit).subscribe(posts => {
        this.posts = posts;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

}

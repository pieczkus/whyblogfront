import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../shared/post/index';
import { LoaderService } from '../shared/loader/loader.service';

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
  posts: Post[] = [];

  constructor(public postService: PostService, private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPosts(this.offset, this.limit).subscribe(posts => {
        this.posts = posts;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
        setTimeout(() => {
          this.loaderService.hide();
        }, 400);
      });
  }

}

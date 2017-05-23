import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../shared/post/post.service';
import { PostListComponent } from '../shared/post-list/post-list.component';

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
  @ViewChild(PostListComponent)
  private postList: PostListComponent;

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPosts(this.offset, this.limit).subscribe(posts => {
        this.postList.posts = posts;
        this.postList.doNext();
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

}

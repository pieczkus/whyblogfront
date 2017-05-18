import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post/post.service';
import { Post } from '../../shared/post/post';

@Component({
  moduleId: module.id,
  selector: 'wb-manager-post-list',
  templateUrl: 'manager-post-list.component.html',
  styleUrls: ['manager-post-list.component.css'],
})
export class ManagerPostListComponent implements OnInit {

  posts: Post[];
  loading = false;
  errorMessage: string;
  notPublishedPosts: Post[];
  notPublishedLoading = false;
  notPublishedErrorMessage: string;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadNotPublishedPosts();
  }

  publish(title: string) {
    this.postService.publishPost(title).subscribe(res => {
      this.loadPosts();
      this.loadNotPublishedPosts();
    });
  }

  private loadPosts() {
    this.loading = true;
    this.postService.getPosts(0, 0).subscribe(posts => {
        this.posts = posts;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

  private loadNotPublishedPosts() {
    this.notPublishedLoading = true;
    this.postService.getNotPublishedPosts().subscribe(posts => {
        this.notPublishedPosts = posts;
      },
      error => this.notPublishedErrorMessage = error,
      () => {
        this.notPublishedLoading = false;
      });
  }


}

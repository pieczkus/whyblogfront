import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/post/post';
import { PostService } from '../../shared/post/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'wb-pinned',
  templateUrl: 'pinned-post.component.html',
  styleUrls: ['pinned-post.component.css'],
})
export class PinnedPostComponent implements OnInit {

  post: Post;
  loading: boolean = true;
  errorMessage: string;

  constructor(public postService: PostService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPinnedPost().subscribe(post => {
        this.post = post;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

  getPinnedBackgroundImage() {
    return 'url(' + this.post.coverUrl + ');';
  }

}

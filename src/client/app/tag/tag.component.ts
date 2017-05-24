import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService, Post } from '../shared/post/index';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  moduleId: module.id,
  selector: 'wb-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.css'],
})
export class TagComponent implements OnInit {

  loading: boolean;
  errorMessage: string;
  posts: Post[] = [];

  constructor(public postService: PostService, private route: ActivatedRoute, private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadTaggedPosts(params['tag']);
    });
  }

  loadTaggedPosts(tag: string): void {
    this.loading = true;
    this.postService.getPostsByTag(tag).subscribe(posts => {
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

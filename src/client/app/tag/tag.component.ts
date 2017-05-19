import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../shared/post/post';
import { PostService } from '../shared/post/post.service';
import { PostListComponent } from '../shared/post-list/post-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'wb-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.css'],
})
export class TagComponent implements OnInit {

  loading: boolean;
  errorMessage: string;
  @ViewChild(PostListComponent)
  private postList: PostListComponent;

  constructor(public postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadTaggedPosts(params['tag']);
    });
  }

  loadTaggedPosts(tag: string): void {
    this.loading = true;
    this.postService.getPostsByTag(tag).subscribe(posts => {
        this.postList.posts = posts;
        this.postList.doNext();
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

}

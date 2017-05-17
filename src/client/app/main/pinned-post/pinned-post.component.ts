import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/post/post';
import { PostService } from '../../shared/post/post.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'wb-pinned',
  templateUrl: 'pinned-post.component.html',
  styleUrls: ['pinned-post.component.css'],
  animations: [
    trigger('pinnedState', [
      state('inactive', style({opacity: 0})),
      state('active', style({opacity: 1})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class PinnedPostComponent implements OnInit {

  post: Post;
  loading: boolean = true;
  errorMessage: string;
  state: string = 'inactive';

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPinnedPost().subscribe(post => {
        this.post = post;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
        setTimeout(() => {
          this.state = 'active';
        }, 200);
      });
  }

  getPinnedBackgroundImage() {
    return 'url(' + this.post.coverUrl + ');';
  }

}

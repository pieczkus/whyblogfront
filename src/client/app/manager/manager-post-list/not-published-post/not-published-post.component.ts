import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../shared/post/post';
import { PostService } from '../../../shared/post/post.service';

@Component({
  moduleId: module.id,
  selector: 'wb-manager-not-published-post',
  templateUrl: 'not-published-post.component.html',
  styleUrls: ['not-published-post.component.css'],
})
export class NotPublishedPostComponent {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  publishPost() {
    this.postService.publishPost(this.post.title).subscribe(res => {
      console.log('post published?');
    });
  }

}

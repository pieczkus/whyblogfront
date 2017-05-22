import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../shared/post/post';
import { PostService } from '../../../shared/post/post.service';

@Component({
  moduleId: module.id,
  selector: 'wb-manager-published-post',
  templateUrl: 'published-post.component.html',
  styleUrls: ['published-post.component.css'],
})
export class PublishedPostComponent {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  pinPost() {
    this.postService.pinPost(this.post.title).subscribe(res => {
    });
  }

}

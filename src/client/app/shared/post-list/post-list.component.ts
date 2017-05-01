import { Component, Input } from '@angular/core';
import { Post } from '../post/post';

@Component({
  moduleId: module.id,
  selector: 'wb-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css'],
})
export class PostListComponent {

  @Input() posts: Post[];

}

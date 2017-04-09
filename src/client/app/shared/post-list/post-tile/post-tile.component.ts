import { Component, Input } from '@angular/core';
import { Post } from '../../post/post';

@Component({
  moduleId: module.id,
  selector: 'wb-post-tile',
  templateUrl: 'post-tile.component.html',
  styleUrls: ['post-tile.component.css'],
})
export class PostTileComponent {

  @Input() post: Post;

}

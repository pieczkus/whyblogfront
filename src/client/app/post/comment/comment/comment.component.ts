import { AfterViewInit, Component, Input } from '@angular/core';
import { PostComment } from '../../../shared/comment/comment';

@Component({
  moduleId: module.id,
  selector: 'wb-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.css']
})
export class CommentComponent {

  @Input() comment: PostComment;

}

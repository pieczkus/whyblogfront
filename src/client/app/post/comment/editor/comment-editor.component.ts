import { AfterViewInit, Component, Input } from '@angular/core';
import { PostComment } from '../../../shared/comment/comment';

@Component({
  moduleId: module.id,
  selector: 'wb-comment-editor',
  templateUrl: 'comment-editor.component.html',
  styleUrls: ['comment-editor.component.css']
})
export class CommentEditorComponent {

  comment: PostComment = new PostComment();

}

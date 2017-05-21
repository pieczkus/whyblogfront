import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostComment } from '../../../shared/comment/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../../shared/comment/comment.service';

@Component({
  moduleId: module.id,
  selector: 'wb-comment-editor',
  templateUrl: 'comment-editor.component.html',
  styleUrls: ['comment-editor.component.css']
})
export class CommentEditorComponent implements OnInit {

  comment: PostComment = new PostComment();
  submitted: boolean = false;
  active: boolean = true;
  commentForm: FormGroup;
  @Output() onCommentAdded = new EventEmitter();
  loading: boolean = false;
  errorMessage: string;

  constructor(private fb: FormBuilder, public commentService: CommentService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.commentForm = this.fb.group({
      'name': [this.comment.authorName, Validators.required],
      'text': [this.comment.content, Validators.required],
      'email': [this.comment.email, Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.comment = this.commentForm.value;
    this.commentService.addComment(this.comment).subscribe(comment => {
        this.comment = new PostComment();
        this.onCommentAdded.emit(comment);

        //form reset workaround
        this.buildForm();
        this.active = false;
        setTimeout(() => this.active = true, 0);
      }, error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

}

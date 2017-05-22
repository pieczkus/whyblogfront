import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() postId: string;
  comment: PostComment = new PostComment();
  submitted: boolean = false;
  active: boolean = true;
  commentForm: FormGroup;
  @Output() onCommentAdded = new EventEmitter();
  loading: boolean = false;
  errorMessage: string;

  formErrors: any = {
    'authorName': '',
    'email': '',
    'content': ''
  };

  validationMessages: any = {
    'authorName': {
      'required': 'Pseudonim jest wymagany'
    },
    'email': {
      'required': 'Email jest wymagany',
      'email': 'Błedny adres email'
    },
    'content': {
      'required': 'Komentarz nie może być pusty'
    }
  };

  constructor(private fb: FormBuilder, public commentService: CommentService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.commentForm = this.fb.group({
      'authorName': [this.comment.authorName, Validators.required],
      'content': [this.comment.content, Validators.required],
      'email': [this.comment.email, Validators.required]
    });

    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      console.log('field ' + field);
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          console.log('field ' + field + ' error key ' + key);
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.comment = this.commentForm.value;
    this.comment.referenceUuid = this.postId;
    this.comment.createdOn = (new Date()).getMilliseconds();
    this.commentService.addComment(this.comment).subscribe(comment => {
        this.onCommentAdded.emit(this.comment);
        this.comment = new PostComment();

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

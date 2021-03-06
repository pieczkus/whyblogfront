import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostComment, CommentService } from '../../shared/comment/index';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'wb-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class CommentsComponent implements OnChanges {

  @Input() postId: string;
  comments: PostComment[];
  staggeringComments: PostComment[] = [];
  next = 0;
  loading: boolean;
  errorMessage: string;
  loaded = false;

  constructor(public commentService: CommentService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['postId'].currentValue;
    if (change) {
      this.staggeringComments = [];
      this.comments = [];
      this.loaded = false;
      this.next = 0;
    }
  }

  loadComments(): void {
    this.loading = true;
    this.commentService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
        this.loaded = true;
        this.doNext();
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
      });
  }

  doNext(): void {
    if (this.next < this.comments.length) {
      this.staggeringComments.push(this.comments[this.next++]);
    }
  }

  commentAdded(newComment: PostComment): void {
    this.comments.push(newComment);
    this.doNext();
  }

}

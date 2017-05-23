import { Component, Input } from '@angular/core';
import { Post } from '../post/post';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'wb-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css'],
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
export class PostListComponent {

  @Input() posts: Post[] = [];
  @Input() colspan: number;
  staggeringPosts: Post[] = [];
  next: number = 0;

  doNext(): void {
    if (this.next < this.posts.length) {
      this.staggeringPosts.push(this.posts[this.next++]);
    }
  }

  commentAdded(newComment: Post): void {
    this.posts.push(newComment);
    this.doNext();
  }

}

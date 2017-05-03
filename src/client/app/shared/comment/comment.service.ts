import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostComment } from './comment';

@Injectable()
export class CommentService {


  getComments(postId: string): Observable<PostComment[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.createInitialComments());
        observer.complete();
      }, 5000);
    });
  }

  addComment(comment: PostComment): Observable<PostComment> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(comment);
        observer.complete();
      }, 5000);
    });
  }

  createInitialComments(): PostComment[] {
    let c = new PostComment();
    c.commentId = 'comment1';
    c.name = 'Bartluka';
    c.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
      ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
      'aliquip ex ea commodo consequat';
    c.postedOn = 1488986222976;

    let c2 = new PostComment();
    c2.commentId = 'comment2';
    c2.name = 'Agultek';
    c2.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
      ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
      'aliquip ex ea commodo consequat';
    c2.postedOn = 1488986822976;
    return [c, c2];
  }

}

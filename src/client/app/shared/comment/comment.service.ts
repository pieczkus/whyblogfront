import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostComment } from './comment'

@Injectable()
export class CommentService {

  getComments(postId: string): Observable<PostComment[]> {
    return new Observable(observer => {
      setTimeout(() => {
        let c = new PostComment();
        c.name = 'Bartluka';
        c.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
          ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
          'aliquip ex ea commodo consequat';
        c.postedOn = 1488986222976;
        c.commentId = 'asdasda';
        observer.next([c, c, c]);
        observer.complete();
      }, 5000);
    });
  }


}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostComment } from './comment';
import { HttpClient } from '../http/http.client';
import { Config } from '../config/env.config';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }


  getComments(postId: string): Observable<PostComment[]> {
    return this.http.get(Config.COMMENT_API + '/reference/' + postId)
      .map(res => <PostComment[]> res.json())
      .catch(this.handleError);
  }

  addComment(comment: PostComment): Observable<PostComment> {
    console.log('new Comment ' + comment);
    return this.http.post(Config.COMMENT_API + '/', JSON.stringify(comment))
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

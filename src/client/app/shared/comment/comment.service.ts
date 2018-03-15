import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostComment } from './comment';
import { Config } from '../config/env.config';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(postId: string): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(Config.COMMENT_API + '/reference/' + postId)
      .pipe(
        catchError(this.handleError<PostComment[]>(`getComments postId=${postId}`))
      );
  }

  addComment(comment: PostComment): Observable<PostComment> {
    return this.http.post<PostComment>(Config.COMMENT_API + '/', JSON.stringify(comment))
      .pipe(
        catchError(this.handleError<PostComment>(`addComment postId=${comment.uuid}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}

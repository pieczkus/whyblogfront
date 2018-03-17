import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { Config } from '../config/env.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';

const httpOptions = {
  headers: new HttpHeaders({'Why-Key': Config.API_KEY})
};

@Injectable()
export class PostService {

  posts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  getPosts(offset: number, limit: number): Observable<Post[]> {
    console.log('loading posts');
    const pinned = this.http.get<Post>(Config.POST_API + '/pinned', httpOptions).pipe(
      catchError(this.handleError<Post>('getPinnedPost'))
    );
    const published = this.http.get<Post[]>(Config.POST_API + '/', httpOptions).pipe(
      catchError(this.handleError<Post[]>(`getPosts offset=${offset} limit=${limit}`))
    );

    return Observable.forkJoin(pinned, published).map(res => {
      if (res[0] && res[0].title && res[0].title !== '') {
        res[1].unshift(res[0]);
      }
      return res[1];
    });
  }

  getNotPublishedPosts(): Observable<Post[]> {
    const options = {headers: this.createAuthorizationHeader(httpOptions.headers)};
    return this.http.get<Post[]>(Config.POST_API + '/notpublished', options)
      .pipe(
        catchError(this.handleError<Post[]>('getNotPublishedPosts'))
      );
  }

  publishPost(title: string): Observable<Post> {
    return this.http.post<Post>(Config.POST_API + '/title/' + title, '').pipe(
      catchError(this.handleError<Post>(`publishPost title=${title}`))
    );
  }

  getPost(title: String): Observable<Post> {
    return this.http.get<Post>(Config.POST_API + '/title/' + title).pipe(
      catchError(this.handleError<Post>(`getPost title=${title}`))
    );
  }

  pinPost(title: String): Observable<Post> {
    return this.http.post<Post>(Config.POST_API + '/title/' + title + '/pin', '').pipe(
      catchError(this.handleError<Post>(`pinPost title=${title}`))
    );
  }

  getPostsByTag(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(Config.POST_API + '/tag/' + tag).pipe(
      catchError(this.handleError<Post[]>(`getPostsByTag tag=${tag}`))
    );
  }

  getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(Config.POST_API + '/' + postId).pipe(
      catchError(this.handleError<Post>(`getPostById postId=${postId}`))
    );
  }

  getNextPost(publishedOn: number): Observable<Post> {
    return this.http.get<Post>(Config.POST_API + '/after/' + publishedOn).pipe(
      catchError(this.handleError<Post>(`getNextPost publishedOn=${publishedOn}`))
    );
  }

  getPrevPost(publishedOn: number): Observable<Post> {
    return this.http.get<Post>(Config.POST_API + '/before/' + publishedOn).pipe(
      catchError(this.handleError<Post>(`getNextPost publishedOn=${publishedOn}`))
    );
  }

  createPost(post: Post): Observable<Post> {
    const options = {headers: this.createAuthorizationHeader(httpOptions.headers)};
    return this.http.post<Post>(Config.POST_API + '/', JSON.stringify(post)).pipe(
      catchError(this.handleError<Post>(`createPost title=${post.title}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' ' + error); // log to console instead
      return of(result as T);
    };
  }

  private createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && user.token) {
      return headers.append('Authorization', 'Bearer ' + user.token);
    }
  }

}


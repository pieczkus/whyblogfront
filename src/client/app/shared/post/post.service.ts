import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { PostBodyComponent } from './post-body-component';
import { HttpClient } from '../http/http.client';
import { Config } from '../config/env.config';

@Injectable()
export class PostService {

  posts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  getPinnedPost(): Observable<Post> {
    return this.http.get(Config.POST_API + '/pinned')
      .map(res => <Post> res.json())
      .catch(this.handleError);
  }

  getPosts(offset: number, limit: number): Observable<Post[]> {
    return new Observable(observer => {
      setTimeout(() => {
        this.posts.push(this.createPost());
        observer.next(this.posts);
        observer.complete();
      }, 1000);
    });
  }

  getPost(title: String): Observable<Post> {
    return this.http.get(Config.POST_API + '/title/' + title)
      .map(res => <Post> res.json())
      .catch(this.handleError);
  }

  getPostById(postId: string): Observable<Post> {
    return this.getPost('');
  }

  getNextPost(): Observable<Post> {
    return this.getPost('');
  }

  getPrevPost(): Observable<Post> {
    return this.getPost('');
  }

  createPost(): Post {
    let p = new Post();
    return p;
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


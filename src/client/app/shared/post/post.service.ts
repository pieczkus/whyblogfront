import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
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
    return this.http.get(Config.POST_API + '/')
      .map(res => <Post[]> res.json())
      .catch(this.handleError);
  }

  getNotPublishedPosts(): Observable<Post[]> {
    return this.http.get(Config.POST_API + '/notpublished')
      .map(res => <Post[]> res.json())
      .catch(this.handleError);
  }

  publishPost(title: string): Observable<Response> {
    return this.http.post(Config.POST_API + '/title/' + title, '')
      .catch(this.handleError);
  }

  getPost(title: String): Observable<Post> {
    return this.http.get(Config.POST_API + '/title/' + title)
      .map(res => <Post> res.json())
      .catch(this.handleError);
  }

  pinPost(title: String): Observable<Response> {
    return this.http.post(Config.POST_API + '/title/' + title + '/pin', '')
      .catch(this.handleError);
  }

  getPostsByTag(tag: string): Observable<Post[]> {
    return this.http.get(Config.POST_API + '/tag/' + tag)
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

  createPost(post: Post): Observable<Response> {
    return this.http.post(Config.POST_API + '/', JSON.stringify(post))
      .catch(this.handleError);
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


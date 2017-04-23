import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import {PostResponse} from './post-response';
import {Meta} from './meta';

@Injectable()
export class PostService {

  posts: Post[] = [];

  constructor(private http: Http) {
  }

  getPinnedPost(): Observable<PostResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new PostResponse(new Meta(200), new Post()));
        observer.complete();
      }, 1000);
    });
  }

  getPosts(offset: number, limit: number): Observable<PostResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new PostResponse(new Meta(200), this.posts));
        observer.complete();
      }, 1000);
    });
  }

  getPost(): Observable<PostResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new PostResponse(new Meta(200), new Post()));
        observer.complete();
      }, 1000);
    });
  }

}


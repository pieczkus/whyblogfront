import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { PostResponse } from './post-response';
import { Meta } from './meta';
import { PostBodyComponent } from './post-body-component';

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

  getPost(): Observable<Post> {
    return new Observable(observer => {
      setTimeout(() => {
        let p = new Post();
        let pbc = new PostBodyComponent('ParagraphComponent');
        pbc.addParameter('text', 'Kilka dni próbowalismy obejrzeć zachód słońca z molo w Międzyzdrojach, ' +
          'niestety nie udawało się bo słońce zachodziło zaczym tam dotarlismy. W przedostatni dzień pobytu udało się ' +
          'zdążyć i słonko nas nie wyprzedziło. Faktem jest, że biegliśmy.');
        p.title = 'Madagaskar';
        p.author = 'Agulka';
        p.commentCount = 4;
        p.coverUrl = 'http://pieczki.pl/assets/img/wolinskieplaze/cover.jpg';
        p.body = [pbc];

        observer.next(p);
        observer.complete();
      }, 1000);
    });
  }

}


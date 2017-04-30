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
        let pbc1 = new PostBodyComponent('ParagraphComponent');
        pbc1.addParameter('text', 'Kilka dni próbowalismy obejrzeć zachód słońca z molo w Międzyzdrojach, ' +
          'niestety nie udawało się bo słońce zachodziło zaczym tam dotarlismy. W przedostatni dzień pobytu udało się ' +
          'zdążyć i słonko nas nie wyprzedziło. Faktem jest, że biegliśmy.');
        let pbc2 = new PostBodyComponent('BreakoutComponent');
        pbc2.addParameter('url', 'http://pieczki.pl/assets/img/wolinskieplaze/1.jpg');
        pbc2.addParameter('title', 'Babaruba');
        let pbc3 = new PostBodyComponent('QuoteComponent');
        pbc3.addParameter('quote', 'Niunio Ap Ap');
        pbc3.addParameter('author', 'Franciszek Pieczka');
        let pbc4 = new PostBodyComponent('YoutubeComponent');
        pbc4.addParameter('url', 'https://www.youtube.com/embed/sxYlBzJBgCM');
        p.title = 'Madagaskar';
        p.author = 'Agulka';
        p.commentCount = 4;
        p.coverUrl = 'http://pieczki.pl/assets/img/wolinskieplaze/cover.jpg';
        p.body = [pbc1, pbc2, pbc3, pbc4];
        p.tags = ['KAczka', 'Dupaczka', 'Sraczka'];

        observer.next(p);
        observer.complete();
      }, 1000);
    });
  }

  getNextPost(): Observable<Post> {
    return this.getPost();
  }

  getPrevPost(): Observable<Post> {
    return this.getPost();
  }

}


import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { PostResponse } from './post-response';
import { Meta } from './meta';

@Injectable()
export class PostService {

  constructor(private http: Http) {
  }

  getPinnedPost(): Observable<PostResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new PostResponse(new Meta(200), [new Post('id', 'Agulka', 'Międzyzdroje', '<h4>Hello</h4>',
          'http://pieczki.pl/assets/img/molo/cover.jpg', [], '', '', '', 1488986222976, 0, '2 Minuty', [], false)]));
        observer.complete();
      }, 1000);
    });
  }

  getPosts(offset: number, limit: number): Observable<PostResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new PostResponse(new Meta(200),
          [new Post('id2', 'Agulka', 'Międzyzdroje2', '<h4>Hello 2</h4>', 'http://pieczki.pl/assets/img/wolinskieplaze/cover.jpg',
            [], '', '', '', 1488986222976, 0, '2 Minuty', [], false),
            new Post('id3', 'Agulka', 'Międzyzdroje3', '<h4>Hello 3</h4>', 'http://pieczki.pl/assets/img/zubry/cover.jpg',
              [], '', '', '', 1488986222976, 0, '3 Minuty', [], false),
            new Post('id4', 'Agulka', 'Międzyzdroj4', '<h4>Hello 4</h4>', 'http://pieczki.pl/assets/img/wolinskiparknarodowy/cover.jpg',
              [], '', '', '', 1488986222976, 0, '4 Minuty', [], false),
          ]));
        observer.complete();
      }, 1000);
    });
  }

  getPost(): Observable<PostResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new PostResponse(new Meta(200), [new Post('id', 'Agulka', 'Międzyzdroje', '<h4>Hello</h4>',
          'http://pieczki.pl/assets/img/molo/cover.jpg', [], '', '', '', 1488986222976, 0, '2 Minuty', [], false)]));
        observer.complete();
      }, 1000);
    });
  }

}


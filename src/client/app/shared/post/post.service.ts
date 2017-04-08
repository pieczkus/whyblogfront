import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private http: Http) {
  }

  getPinnedPost(): Observable<Post> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(new Post('id', 'Agulka', 'Międzyzdroje', '<h4>Hello</h4>',
          'http://pieczki.pl/assets/img/molo/cover.jpg', [], '', '', '', 1488986222976, 0, '2 Minuty', [], false));
        observer.complete();
      }, 1000);
    });
  }
}

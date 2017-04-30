import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {
  }

  getProfile(author: string): Observable<Profile> {
    return new Observable(observer => {
      setTimeout(() => {
        let p = new Profile();
        p.name = 'Bartluka';
        p.imageUrl = 'http://2.gravatar.com/avatar/b7f24a60b092be0c60c6ed6291297da7?s=120&d=http%3A%2F%2Fwww.theupcomin' +
          'g.co.uk%2Fimages%2Ftucuser-avatar-new.png&r=g';
        observer.next(p);
        observer.complete();
      }, 1000);
    });
  }
}

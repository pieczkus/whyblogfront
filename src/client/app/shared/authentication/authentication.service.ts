import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<User> {
    return new Observable(observer => {
      setTimeout(() => {
        let user: User;
        if (username === 'multiple') {
          user = new User(username, ['Manager', 'Admin']);
        } else {
          user = new User(username, ['User']);
        }
        observer.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        observer.complete();
      }, 500);
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User {
    let user = localStorage.getItem('currentUser');
    return JSON.parse(user);
  }
}

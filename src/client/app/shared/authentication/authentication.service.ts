import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { User } from './user';
import { HttpClient } from '../http/http.client';
import { Config } from '../config/env.config';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(Config.AUTH_API + '/login', JSON.stringify({email: email, password: password}))
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
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

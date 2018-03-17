import { Injectable } from '@angular/core';
import { User } from './user';
import { Config } from '../config/env.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<User>(Config.AUTH_API + '/login', JSON.stringify({email: email, password: password}), httpOptions)
      .pipe(
        tap(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }),
        catchError(this.handleError<User>(`login email=${email}`))
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User {
    const user = localStorage.getItem('currentUser');
    return JSON.parse(user);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' ' + error); // log to console instead
      return of(result as T);
    };
  }
}

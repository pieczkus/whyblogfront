import { Http, RequestOptions, Headers } from '@angular/http';
import { Config } from '../config/env.config';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {
  }


  post(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    this.createApiKeyHeader(headers);
    this.createJsonHeaders(headers);
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, data, options);
  }

  private createJsonHeaders(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('Csrf-Token', 'nocheck');
  }

  private createApiKeyHeader(headers: Headers) {
    headers.append('Why-Key', Config.AUTH_KEY);
  }

  private createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
}

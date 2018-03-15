// import { Http, RequestOptions, Headers } from '@angular/common/http';
// import { Config } from '../config/env.config';
// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class HttpClient {
//
//   constructor(private http: Http) {
//   }
//
//   get(url: string) {
//     let headers = new Headers();
//     this.createApiKeyHeader(headers);
//     this.createAuthorizationHeader(headers);
//     let options = new RequestOptions({headers: headers});
//     return this.http.get(url, options);
//   }
//
//   post(url: string, data: any) {
//     let headers = new Headers();
//     this.createAuthorizationHeader(headers);
//     this.createApiKeyHeader(headers);
//     this.createJsonHeaders(headers);
//     let options = new RequestOptions({headers: headers});
//     return this.http.post(url, data, options);
//   }
//
//   private createJsonHeaders(headers: Headers): void {
//     headers.append('Content-Type', 'application/json');
//     headers.append('Csrf-Token', 'nocheck');
//   }
//
//   private createApiKeyHeader(headers: Headers): void {
//     headers.append('Why-Key', Config.API_KEY);
//   }
//
//   private createAuthorizationHeader(headers: Headers): void {
//     let user = JSON.parse(localStorage.getItem('currentUser'));
//     if (user && user.token) {
//       headers.append('Authorization', 'Bearer ' + user.token);
//     }
//   }
// }

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationService {

  private options: RequestOptionsArgs = {
    withCredentials: true
  };
  private sessionUrl = 'http://localhost:5000/api/session/mine';
  private cookieUrl  = 'http://localhost:5000/api/clients';
  private signUpUrl  = 'http://localhost:5000/api/users';

  constructor(private http: Http) { }

  login(username, password): Observable<boolean> {
    let credentials = { username, password };
    return this.getCookie()
      .catch(() => this.http.put(this.sessionUrl, credentials, this.options))
      .map(response => true)
      .catch(error => Observable.of(false));
  }

  register(username, password): Observable<boolean> {
    let credentials = { username, password };
    return this.getCookie()
      .catch(() => this.http.post(this.signUpUrl, credentials, this.options))
      .map(response => true)
      .catch(error => Observable.of(false));
  }

  logout(): Observable<boolean> {
    return this.http
      .delete(this.sessionUrl, this.options)
      .map(response =>  true)
      .catch(error => Observable.of(false));
  }

  isLoggedIn(falseFn): Observable<boolean> {
    return this.getCookie()
      .map(() => true)
      .catch((error, caught) => {
        falseFn();
        return Observable.of(false);
      });
  }

  private getCookie(): Observable<Response> {
    return this.http
      .get(this.cookieUrl, this.options);
  }

}

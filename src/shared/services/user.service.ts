import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user';
import { HTTP_UNAUTHORIZED, HTTP_UNEXPECTED, CLIENT_CONNECTION } from '../constants/error-messages';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = environment.hostAPI;

  userLoaded: Subject<User> = new Subject<User>();

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string) {
    return this.httpClient
               .post<User>(`${this.host}/user/login`, {userName, password})
               .pipe(catchError(this.handleError));
  }

  userSessionInfo() {
    return this.httpClient
               .get<User>(`${this.host}/user/me`)
               .pipe(catchError(this.handleError));
  }

  userList() {
    return this.httpClient
               .get<Array<User>>(`${this.host}/user/list`)
               .pipe(catchError(this.handleError));
  }

  loadUserInfo(user: User) {
    this.userLoaded.next(user);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError(CLIENT_CONNECTION);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      switch (error.status) {
        case 401: return throwError(HTTP_UNAUTHORIZED);
        default: return throwError(HTTP_UNEXPECTED);
      }
    }
  }
}

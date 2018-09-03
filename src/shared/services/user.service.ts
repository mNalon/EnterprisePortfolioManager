import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user';
import { HTTP_UNAUTHORIZED, HTTP_UNEXPECTED, CLIENT_CONNECTION } from '../constants/error-messages';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = 'config.host';

  constructor(private httpClient: HttpClient) { }

  login(name: string, password: string) {
    return this.httpClient
               .post<User>(`${this.host}/login`, {name: name, password: password})
               .pipe(catchError(this.handleError));
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

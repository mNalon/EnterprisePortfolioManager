import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

import { handleError } from './utils';
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
               .pipe(catchError(handleError));
  }

  userSessionInfo() {
    return this.httpClient
               .get<User>(`${this.host}/user/me`)
               .pipe(catchError(handleError));
  }

  userList() {
    return this.httpClient
               .get<Array<User>>(`${this.host}/user/list`)
               .pipe(catchError(handleError));
  }

  getUser(id) {
    return this.httpClient
               .get<User>(`${this.host}/user/${id}`)
               .pipe(catchError(handleError));
  }

  deleteUser(id) {
    return this.httpClient
               .delete<User>(`${this.host}/user/${id}`)
               .pipe(catchError(handleError));
  }

  createUser(user: User) {
    return this.httpClient
               .post<User>(`${this.host}/user`, user)
               .pipe(catchError(handleError));
  }

  editUser(user: User) {
    return this.httpClient
               .put<User>(`${this.host}/user/${user._id}`, user)
               .pipe(catchError(handleError));
  }

  loadUserInfo(user: User) {
    this.userLoaded.next(user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Role } from '../models/role';
import { environment } from '../../environments/environment';

import { handleError } from './utils';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  host = environment.hostAPI;

  constructor(private httpClient: HttpClient) { }

  roleList() {
    return this.httpClient
               .get<Array<Role>>(`${this.host}/role/list`)
               .pipe(catchError(handleError));
  }
}

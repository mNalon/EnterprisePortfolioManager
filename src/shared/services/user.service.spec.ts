import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

import { UserService } from './user.service';
import { User } from '../models/user';
import { ResponseError } from '../models/response-error';
import { HTTP_UNAUTHORIZED } from '../constants/error-messages';

const unauthorizedResponse = new HttpErrorResponse({
  error: 'UNAUTHORIZED',
  status: 401,
  statusText: 'Unauthorized'
});

describe('UserService', () => {
  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        UserService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it('should be created', () => {
    const userService = TestBed.get(UserService);
    expect(userService).toBeTruthy();
  });

  it('should have login done', () => {
    const userService = TestBed.get(UserService);
    const userName = 'fake';
    const userPassword = 'fake';
    const fakeUser = {
      name: 'Fake',
      userName: 'fake',
      role: 'admin'
    };

    TestBed.get(HttpClient).post.and.returnValue(from(new Promise(res => res(fakeUser))));
    userService.login(userName, userPassword).subscribe((user: User) => {
      expect(user).toEqual(fakeUser);
    });
  });

  it('should return an unauthorized error', () => {
    const userService = TestBed.get(UserService);
    const userName = 'fake';
    const userPassword = 'fakeWrong';

    TestBed.get(HttpClient).post
           .and.returnValue(from(new Promise((res, rej) => rej(unauthorizedResponse))));
    userService.login(userName, userPassword).subscribe((error: ResponseError) => {
      expect(error.message).toBe(HTTP_UNAUTHORIZED.message);
      expect(error.code).toBe(HTTP_UNAUTHORIZED.code);
    });
  });


});

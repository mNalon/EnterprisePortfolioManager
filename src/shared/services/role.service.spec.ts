import { TestBed } from '@angular/core/testing';

import { RoleService } from './role.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('RoleService', () => {
  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        RoleService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it('should be created', () => {
    const roleService = TestBed.get(RoleService);
    expect(roleService).toBeTruthy();
  });

});



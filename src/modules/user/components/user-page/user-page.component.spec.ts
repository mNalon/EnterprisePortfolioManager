import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { from } from 'rxjs';

import { UserPageComponent } from './user-page.component';

import { SharedModule } from '../../../../shared/shared.module';
import { UserService } from '../../../../shared/services/user.service';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async(() => {
    const userServicetSpy = jasmine.createSpyObj('UserService', ['userList', 'deleteUser']);
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), SharedModule],
      declarations: [ UserPageComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: UserService, useValue: userServicetSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.get(UserService).userList.and.returnValue(from(new Promise(res => res([]))));
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

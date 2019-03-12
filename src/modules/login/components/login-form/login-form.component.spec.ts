import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UserService } from '../../../../shared/services/user.service';
import { HTTP_UNAUTHORIZED } from '../../../../shared/constants/error-messages';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    const userServicetSpy = jasmine.createSpyObj('UserService', ['login']);
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [SharedModule.forRoot(), FormsModule],
      providers: [
        { provide: UserService, useValue: userServicetSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable login button while userName and userPassword are empty', () => {
    const loginButton = fixture.nativeElement.querySelector('#login-form input[type=submit]');
    component.userName = null;
    component.userPassword = null;
    expect(loginButton.disabled).toBe(true);
    component.userName = 'fakeUser';
    component.userPassword = 'fakePassword';
    fixture.detectChanges();
    expect(loginButton.disabled).toBe(false);
  });

  it('when login fails it should show a message error', () => {
    component.userName = 'fakeUser';
    component.userPassword = 'fakePassword';
    TestBed.get(UserService).login.and.returnValue(throwError(HTTP_UNAUTHORIZED));
    component.login();
    expect(component.errorMessage).toBe(HTTP_UNAUTHORIZED.message);
  });
});


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { from } from 'rxjs';

import { UserFormPageComponent } from './user-form-page.component';

import { UserService } from '../../../../shared/services/user.service';
import { RoleService } from '../../../../shared/services/role.service';

describe('UserFormPageComponent', () => {
  let component: UserFormPageComponent;
  let fixture: ComponentFixture<UserFormPageComponent>;

  beforeEach(async(() => {
    const roleServicetSpy = jasmine.createSpyObj('RoleService', ['roleList']);
    TestBed.configureTestingModule({
      declarations: [ UserFormPageComponent ],
      providers: [
        { provide: RoleService, useValue: roleServicetSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.get(RoleService).roleList.and.returnValue(from(new Promise(res => res([]))));
    fixture = TestBed.createComponent(UserFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

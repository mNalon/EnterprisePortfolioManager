import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../../../../shared/models/user';
import { Role } from '../../../../shared/models/role';

import { UserService } from '../../../../shared/services/user.service';
import { RoleService } from '../../../../shared/services/role.service';

const EMPTY_USER = {
  name: '',
  userName: '',
  role: null,
  email: '',
  password: ''
};

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  availableRoles: Array<Role> = [];

  user: User;

  errorMessage: String;

  constructor(private roleService: RoleService,
    private userService: UserService,
    private router: Router) {
      this.user = EMPTY_USER;
  }

  ngOnInit() {
    this.roleService.roleList().subscribe((roles => this.availableRoles = roles));
  }

  addUser(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.userService.createUser(this.user)
      .subscribe(
        () => this.router.navigate(['/users']),
        error => this.errorMessage = error.message
      );
  }

  editUser(event: any) {
    console.log('Edit user');
    event.preventDefault();
    event.stopPropagation();
  }

}

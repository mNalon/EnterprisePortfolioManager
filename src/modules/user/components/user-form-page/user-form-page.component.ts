import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../../../../shared/models/user';
import { Role } from '../../../../shared/models/role';

import { UserService } from '../../../../shared/services/user.service';
import { RoleService } from '../../../../shared/services/role.service';

const EMPTY_USER = {
  _id: '',
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
    private router: Router,
    private route: ActivatedRoute) {
      this.user = EMPTY_USER;
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id')

    this.roleService.roleList().subscribe(roles => this.availableRoles = roles);

    if(userId){
      this.userService.getUser(userId)
        .subscribe(
          user => this.user = user,
          error => this.errorMessage = error.message
        );
    }
  }

  addUser(event: any) {
    event.preventDefault();
    event.stopPropagation();
    delete this.user._id;
    this.userService.createUser(this.user)
      .subscribe(
        () => this.router.navigate(['/users']),
        error => this.errorMessage = error.message
      );
  }

  editUser(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.userService.editUser(this.user)
      .subscribe(
        () => this.router.navigate(['/users']),
        error => this.errorMessage = error.message
      );
  }

}

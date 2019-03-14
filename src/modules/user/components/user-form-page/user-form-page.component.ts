import { Component, OnInit } from '@angular/core';

import { User } from '../../../../shared/models/user';
import { Role } from '../../../../shared/models/role';

import { UserService } from '../../../../shared/services/user.service';
import { RoleService } from '../../../../shared/services/role.service';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  availableRoles: Array<Role> = [];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.roleList().subscribe((roles => this.availableRoles = roles));
  }

}

import { Component, OnInit } from '@angular/core';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userList().subscribe((users => this.users = users));
  }

}

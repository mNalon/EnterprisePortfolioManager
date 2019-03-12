import { Component, OnInit } from '@angular/core';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

const CONFIRM_DELETION_MESSAGE = 'Tem certeza que deseja deletar esse usuário?';
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

  deleteUser(id, index) {
    if (confirm(CONFIRM_DELETION_MESSAGE)) {
      this.userService.deleteUser(id).subscribe(
        user => this.users.splice(index, 1),
        error => alert(error.message)
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userName: string;
  userPassword: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.userName, this.userPassword).subscribe(null, error => {
      this.errorMessage = error.message;
    });
  }

  disableLogin() {
    return !(this.userName && this.userPassword);
  }

}

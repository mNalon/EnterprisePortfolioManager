import { Component, OnInit } from '@angular/core';

import { User } from '../../../../shared/models/user';

import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService) { }

  loggedUser: User = null;

  ngOnInit() {
    this.userService.userSessionInfo().subscribe(user => { this.loggedUser = user; });
  }

}

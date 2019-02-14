import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loggedUser: User = null;
  loadUserSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUserSubscription = this.userService.userLoaded.subscribe(user => { this.loggedUser = user; });
    this.userService.userSessionInfo().subscribe(user => { this.userService.loadUserInfo(user); });
  }

  ngOnDestroy() {
    this.loadUserSubscription.unsubscribe();
  }
}

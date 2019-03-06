import { Component, OnInit } from '@angular/core';

import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  user: User = {
      _id: 123,
      name: 'FakeUser',
      email: 'fakeEmail',
      userName: 'fake',
      role: {
        _id: 213,
        name: 'Fakezão',
        actions: []
      }
    };

  ngOnInit() {
  }

}

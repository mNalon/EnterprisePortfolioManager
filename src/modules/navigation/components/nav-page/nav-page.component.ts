import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
  }

}

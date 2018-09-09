import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private menuItems = [{
    data: {title: 'Usuários'},
    path: '/users',
    availableFor: ['admin']
  }, {
    data: {title: 'Projetos'},
    path: '/projects',
    availableFor: ['admin']
  }];

  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

  getAvailableMenus() {
    return this.menuItems;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';

const AVAILABLE_MENU_ITEMS = [{
    title: 'Usuários',
    path: '/users',
    actionRequired: 'view_users'
  }, {
    title: 'Projetos',
    path: '/projects',
    actionRequired: ''
  }];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private menuItems = [];

  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
    this.menuItems = AVAILABLE_MENU_ITEMS.filter(menu =>
        !!this.user.role.actions.find(action => menu.actionRequired === action.slug));
  }

  getAvailableMenus() {
    return this.menuItems;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}

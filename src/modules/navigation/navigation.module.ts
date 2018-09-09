import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [NavBarComponent, NavPageComponent, UserPageComponent],
  exports: [NavPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationModule { }

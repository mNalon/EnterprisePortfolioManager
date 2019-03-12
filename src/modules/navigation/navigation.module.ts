import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../environments/environment';

import { UserModule } from '../user/user.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';


import { UserPageComponent } from '../user/components/user-page/user-page.component';
import { UserFormPageComponent } from '../user/components/user-form-page/user-form-page.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'users', component: UserPageComponent },
    { path: 'users/add', component: UserFormPageComponent },
    { path: 'users/edit/:id', component: UserFormPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    UserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: !environment.production } // <-- debugging purposes only
      )
  ],
  declarations: [NavBarComponent, NavPageComponent, HomePageComponent],
  exports: [NavPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationModule { }

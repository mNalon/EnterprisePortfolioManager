import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../../environments/environment';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'users', component: UserPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: !environment.production } // <-- debugging purposes only
      )
  ],
  declarations: [NavBarComponent, NavPageComponent, UserPageComponent, HomePageComponent],
  exports: [NavPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationModule { }

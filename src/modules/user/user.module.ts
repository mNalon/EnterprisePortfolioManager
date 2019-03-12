import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserFormPageComponent } from './components/user-form-page/user-form-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [UserPageComponent, UserFormPageComponent],
  exports: [UserPageComponent, UserFormPageComponent]
})
export class UserModule { }

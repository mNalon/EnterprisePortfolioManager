import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [LoginFormComponent, LoginPageComponent],
  exports:[LoginPageComponent]
})
export class LoginModule { }

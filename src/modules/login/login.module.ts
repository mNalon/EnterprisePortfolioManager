import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  declarations: [LoginFormComponent, LoginPageComponent],
  exports: [LoginPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }

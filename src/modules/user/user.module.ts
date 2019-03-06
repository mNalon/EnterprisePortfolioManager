import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserFormPageComponent } from './components/user-form-page/user-form-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserPageComponent, UserFormPageComponent],
  exports: [UserPageComponent, UserFormPageComponent]
})
export class UserModule { }

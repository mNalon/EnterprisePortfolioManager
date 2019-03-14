import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [  ],
  exports: [  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UserService, RoleService ]
    };
  }
}

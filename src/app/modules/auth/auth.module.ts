import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthTemplateComponent } from '@templates/auth-template/auth-template.component';
import { LoginComponent } from '@views/login/login.component';


@NgModule({
  declarations: [
    AuthTemplateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

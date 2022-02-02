import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthTemplateComponent } from '@templates/auth-template/auth-template.component';
import { LoginComponent } from '@views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { SharedModule } from '@modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '@services/auth-guard.service';



@NgModule({
  declarations: [
    AuthTemplateComponent,
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    // HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule { }

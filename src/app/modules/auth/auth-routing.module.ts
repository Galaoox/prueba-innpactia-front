import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTemplateComponent } from '@templates/auth-template/auth-template.component';
import { LoginComponent } from '@views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthTemplateComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

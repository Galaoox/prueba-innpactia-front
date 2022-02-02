import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@services/auth-guard.service';
import { IndexTemplateComponent } from '@templates/index-template/index-template.component';
import { CustomersComponent } from '@views/customers/customers.component';
import { UsersComponent } from '@views/users/users.component';

const routes: Routes = [{
  path: '',
  component: IndexTemplateComponent,
  canActivateChild: [AuthGuardService],

  children: [
    {
      path: '',
      component: CustomersComponent
    },
    {
      path: 'usuarios',
      component: UsersComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }

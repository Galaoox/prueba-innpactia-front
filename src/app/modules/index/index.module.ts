import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { AuthService } from '@services/auth.service';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { IndexTemplateComponent } from '@templates/index-template/index-template.component';
import { CustomersComponent } from '@views/customers/customers.component';
import { SharedModule } from '@modules/shared/shared.module';
import { ListCustomersComponent } from '@components/customers/list-customers/list-customers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '@services/auth-guard.service';
import { CustomersService } from '@services/customers.service';
import { FormCustomerComponent } from '@components/customers/form-customer/form-customer.component';
import { ListPhonesComponent } from '@components/phones/list-phones/list-phones.component';
import { PhonesService } from '@services/phones.service';
import { FormPhoneComponent } from '@components/phones/form-phone/form-phone.component';
import { ListRepairsComponent } from '@components/repairs/list-repairs/list-repairs.component';
import { FormRepairComponent } from '@components/repairs/form-repair/form-repair.component';
import { RepairsService } from '@services/repairs.service';
import { ListUsersComponent } from '@components/users/list-users/list-users.component';
import { UsersService } from '@services/users.service';
import { UsersComponent } from '@views/users/users.component';
import { FormUserComponent } from '@components/users/form-user/form-user.component';


@NgModule({
  declarations: [
    NavbarComponent,
    IndexTemplateComponent,
    CustomersComponent,
    ListCustomersComponent,
    FormCustomerComponent,
    ListPhonesComponent,
    FormPhoneComponent,
    ListRepairsComponent,
    FormRepairComponent,
    ListUsersComponent,
    UsersComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService,
    AuthGuardService,
    CustomersService,
    PhonesService,
    RepairsService,
    UsersService
  ]
})
export class IndexModule { }

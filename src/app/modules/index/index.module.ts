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


@NgModule({
  declarations: [
    NavbarComponent,
    IndexTemplateComponent,
    CustomersComponent,
    ListCustomersComponent,
    FormCustomerComponent,
    ListPhonesComponent,
    FormPhoneComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    // HttpClientModule,
  ],
  providers: [AuthService,
    AuthGuardService,
    CustomersService,
    PhonesService
  ]
})
export class IndexModule { }

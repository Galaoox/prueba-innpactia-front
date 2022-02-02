import { Component, OnInit } from '@angular/core';
import { ICustomer } from '@interfaces/ICustomer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '@services/customers.service';
import { FormCustomerComponent } from '@components/customers/form-customer/form-customer.component';
import { SharedService } from '@services/shared.service';
import { ListPhonesComponent } from '@components/phones/list-phones/list-phones.component';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = 1;
  customers: ICustomer[] = [];

  constructor(private _customerService: CustomersService, private _modalService: NgbModal, private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getData();
  }

  refreshData() {
    this.getData();
  }

  getData() {
    this._customerService.getList(this.pageSize, this.page).subscribe({
      next: (res: any) => {
        this.customers = res.data;
        this.collectionSize = res.info.total;
      }
    });
  }

  deleteCustomer(id?: number) {
    if (id) {
      this._sharedService.showConfirm({
        title: 'Eliminar cliente',
        text: '¿Está seguro de eliminar el cliente?',
        type: 'warning',
        confirm: () => {
          this._customerService.deleteCustomer(id).subscribe({
            next: (res: any) => {
              this.refreshData();
            },
            error: ({ error }) => this._sharedService.showAlert('error', error.message)
          });
        }
      })
    }

  }

  openFormCustomer(id?: number) {
    const modalRef = this._modalService.open(FormCustomerComponent, {
      keyboard: false,
      beforeDismiss: () => false
    });
    modalRef.componentInstance.id = id;
    modalRef.result.then((res) => {
      if (res) this.refreshData();
    });
  }

  showPhones(customerId?: number) {
    if (customerId) {
      const modalRef = this._modalService.open(ListPhonesComponent, {
        keyboard: false,
        beforeDismiss: () => false,
        size: 'lg'
      });
      modalRef.componentInstance.customerId = customerId;
      modalRef.result.then((res) => {
      });
    }
  }

}

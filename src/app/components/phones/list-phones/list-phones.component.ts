import { Component, OnInit } from '@angular/core';
import { IPhone } from '@interfaces/IPhone';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhonesService } from '@services/phones.service';
import { SharedService } from '@services/shared.service';
import { FormPhoneComponent } from '../form-phone/form-phone.component';

@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phones.component.html',
  styleUrls: ['./list-phones.component.css']
})
export class ListPhonesComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = 1;
  phones: IPhone[] = [];
  customerId?: number;

  constructor(public activeModal: NgbActiveModal, private _phonesService: PhonesService, private _sharedService: SharedService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    if (this.customerId) {
      this._phonesService.getList(this.pageSize, this.page, this.customerId).subscribe({
        next: (res: any) => {
          this.phones = res.data;
          this.collectionSize = res.info.total;
        },
        error: ({ error }) => this._sharedService.showAlert('warning', error.message)
      })
    }
  }

  refreshData() {
    this.getData();
  }

  openFormPhone(id?: number) {
    const modalRef = this._modalService.open(FormPhoneComponent, {
      keyboard: false,
      beforeDismiss: () => false
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.customerId = this.customerId;
    modalRef.result.then((res) => {
      if (res) this.refreshData();
    });
  }

}

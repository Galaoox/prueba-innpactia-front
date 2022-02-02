import { Component, OnInit } from '@angular/core';
import { IRepair } from '@interfaces/IRepair';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RepairsService } from '@services/repairs.service';
import { SharedService } from '@services/shared.service';
import { FormRepairComponent } from '@components/repairs/form-repair/form-repair.component';

@Component({
  selector: 'app-list-repairs',
  templateUrl: './list-repairs.component.html',
  styleUrls: ['./list-repairs.component.css']
})
export class ListRepairsComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = 1;
  repairs: IRepair[] = [];
  phoneId?: number;

  constructor(public activeModal: NgbActiveModal, private _repairsService: RepairsService, private _sharedService: SharedService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    if (this.phoneId) {
      this._repairsService.getList(this.pageSize, this.page, this.phoneId).subscribe({
        next: (res: any) => {
          this.repairs = res.data.map((repair: IRepair) => {
            repair.created_at = new Date(repair.created_at as any);
            return repair;
          });
          this.collectionSize = res.info.total;
        },
        error: ({ error }) => this._sharedService.showAlert('warning', error.message)
      })
    }
  }

  refreshData() {
    this.getData();
  }

  openFormRepair(id?: number) {
    const modalRef = this._modalService.open(FormRepairComponent, {
      keyboard: false,
      beforeDismiss: () => false
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.phoneId = this.phoneId;
    modalRef.result.then((res) => {
      if (res) this.refreshData();
    });
  }

  deleteRepair(id?: number) {
    if (id) {
      this._repairsService.deleteRepair(id).subscribe({
        next: (res: any) => {
          this.refreshData();
        },
        error: ({ error }: any) => this._sharedService.showAlert('error', error.message)
      });
    }

  }

}

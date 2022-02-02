import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RepairsService } from '@services/repairs.service';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-form-repair',
  templateUrl: './form-repair.component.html',
  styleUrls: ['./form-repair.component.css']
})
export class FormRepairComponent implements OnInit {

  public id?: number;
  public phoneId?: number;

  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private _sharedService: SharedService, private _repairService: RepairsService) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    if (this.id) this.getInfoPhone(this.id);
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      if (this.id) this.update(data, this.id);
      else {
        if (this.phoneId) data.phoneId = this.phoneId;
        this.create(data)
      };
    } else {
      this._sharedService.showAlert('warning', 'Por favor, verifique los campos.');
    }
  }

  getInfoPhone(id: number) {
    this._repairService.getRepair(id).subscribe({
      next: (res: any) => {
        this.id = res.data.id;
        this.form.patchValue(res.data);
      },
      error: ({ error }: any) => this._sharedService.showAlert('error', error.message)
    });
  }

  create(data: any) {
    this._repairService.createRepair(data).subscribe({
      next: (res: any) => {
        this.activeModal.close(true);
      },
      error: ({ error }: any) => this._sharedService.showAlert('error', error.message)
    });
  }

  update(data: any, id: number) {
    this._repairService.updateRepair(data, id).subscribe({
      next: (res: any) => {
        this.activeModal.close(res);
      },
      error: ({ error }: any) => this._sharedService.showAlert('error', error.message)
    });
  }


  createForm() {
    return this.fb.group({
      description: ['', [Validators.required]],
    });
  }

}

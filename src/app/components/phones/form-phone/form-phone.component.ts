import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PhonesService } from '@services/phones.service';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.css']
})
export class FormPhoneComponent implements OnInit {

  public id?: number;
  public customerId?: number;

  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private _sharedService: SharedService, private _phoneService: PhonesService) {
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
        if (this.customerId) data.customerId = this.customerId;
        this.create(data)
      };
    } else {
      this._sharedService.showAlert('warning', 'Por favor, verifique los campos.');
    }
  }

  getInfoPhone(id: number) {
    this._phoneService.getPhone(id).subscribe({
      next: (res: any) => {
        this.id = res.data.id;
        this.form.patchValue(res.data);
      },
      error: ({ error }) => this._sharedService.showAlert('error', error.message)
    });
  }

  create(data: any) {
    this._phoneService.createPhone(data).subscribe({
      next: (res: any) => {
        this.activeModal.close(true);
      },
      error: ({ error }) => this._sharedService.showAlert('error', error.message)
    });
  }

  update(data: any, id: number) {
    this._phoneService.updatePhone(data, id).subscribe({
      next: (res: any) => {
        this.activeModal.close(res);
      },
      error: ({ error }) => this._sharedService.showAlert('error', error.message)
    });
  }


  createForm() {
    return this.fb.group({
      model: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

}

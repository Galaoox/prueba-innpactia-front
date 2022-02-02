import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '@services/shared.service';
import { CustomersService } from '@services/customers.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {

  public id?: number;

  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private _sharedService: SharedService, private _customerService: CustomersService) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    if (this.id) this.getInfoCustomer(this.id);
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      if (this.id) this.update(data, this.id);
      else this.create(data);
    } else {
      this._sharedService.showAlert('warning', 'Por favor, verifique los campos.');
    }
  }

  getInfoCustomer(id: number) {
    this._customerService.getCustomer(id).subscribe({
      next: (res: any) => {
        this.id = res.data.id;
        this.form.patchValue(res.data);
      },
      error: ({ error }) => this._sharedService.showAlert('error', error.message)
    });
  }

  create(data: any) {
    this._customerService.createCustomer(data).subscribe({
      next: (res: any) => {
        this.activeModal.close(true);
      },
      error: ({ error }) => this._sharedService.showAlert('error', error.message)
    });
  }

  update(data: any, id: number) {
    this._customerService.updateCustomer(data, id).subscribe({
      next: (res: any) => {
        this.activeModal.close(res);
      },
      error: ({ error }) => this._sharedService.showAlert('error', error.message)
    });
  }


  createForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      numberPhone: ['', [Validators.required]]
    });
  }

}

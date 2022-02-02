import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '@services/shared.service';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {


  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private _sharedService: SharedService, private _userService: UsersService) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.create(data);
    } else {
      this._sharedService.showAlert('warning', 'Por favor, verifique los campos.');
    }
  }

  create(data: any) {
    this._userService.createUser(data).subscribe({
      next: (res: any) => {
        this.activeModal.close(true);
      },
      error: ({ error }: any) => this._sharedService.showAlert('error', error.message)
    });
  }




  createForm() {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}

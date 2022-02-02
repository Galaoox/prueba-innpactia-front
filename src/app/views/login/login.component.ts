import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '@services/shared.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private _authService: AuthService, private fb: FormBuilder, private _sharedService: SharedService, public router: Router) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.login(data);
    } else {
      this._sharedService.showAlert('error', 'Hay campos sin diligenciar en el formulario');
    }
  }

  login(data: { username: string, password: string }) {
    this._authService.login(data).subscribe({
      next: (res: any) => {
        this._sharedService.showAlert('success', res.message);
        this._authService.setValueToken(res.token);
        this.router.navigate(['']);

      },
      error: ({ error }: any) => {
        this._sharedService.showAlert('error', error?.message);

      }
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.getTokenFromStorage();
  }

  setValueToken(token: string) {
    this.setTokenToStorage(token);
  }

  login(data: { username: string, password: string }) {
    return this.http.post(environment.api + 'auth/login', data);
  }

  private setTokenToStorage(token: string) {
    localStorage.setItem('token', token);
  }

  private getTokenFromStorage() {
    const localToken = localStorage.getItem('token');
    return localToken ? localToken : '';
  }

  public getToken(): string {
    return this.getTokenFromStorage();
  }

  public isAuthenticated(): boolean {
    let valid = false;
    try {
      valid = !this.helper.isTokenExpired(this.getTokenFromStorage());
    } catch (error) {
      valid = false;
    }
    if (!valid) this.setTokenToStorage('');
    return valid;
  }



}

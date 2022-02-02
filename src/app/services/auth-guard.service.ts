import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivateChild {
  token: string = '';
  constructor(public _authService: AuthService, public router: Router) {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLogin = this.validateUrl(state.url);
    if (!isLogin && !this._authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    } else if (isLogin && this._authService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  validateUrl(baseURL: string) {
    return baseURL.includes('login');
  }

}

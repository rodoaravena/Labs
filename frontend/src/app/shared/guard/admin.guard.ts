import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/firebase/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public authService: AuthService,
    public router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      this.router.navigate(['/auth/login']);
      return true
    }
    return true
  }
}

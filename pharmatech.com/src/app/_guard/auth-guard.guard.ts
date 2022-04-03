import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  token: any;
  userData: any;
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token")
        this.userData = jwt_decode(this.token)
      }
      if(this.userData){
        if(this.userData['role'] == "admin"){
          return true;
        }
        else{
          this.router.navigate(['/home']) //navigate to home page
        }
        // alert('u r not an admin') // ob2i sheliha
      }
      else{
        this.router.navigate(['/home']) //navigate to home page
      }
  
  }
  
}

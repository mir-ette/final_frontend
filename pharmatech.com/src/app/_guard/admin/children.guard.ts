import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class ChildrenGuard implements CanActivateChild {
    token: any;
    userData: any;
    constructor(private router: Router) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | any {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token")
            this.userData = jwt_decode(this.token)
        }
        if (this.userData) {
            if (this.userData['role'] == "admin") {
                return true;
            }
            else {
                this.router.navigate(['/login']) //navigate to home page
            }
        }
        else {
            this.router.navigate(['/login']) //navigate to home page
        }

    }
}
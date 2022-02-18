import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  public userData;role;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.userData = localStorage.getItem('access_token');
    let access_token = jwt_decode(this.userData);
    console.log('access token decode', access_token);

    this.role = access_token['type'];

    if(this.userData){

      if(this.role != ''){
        return true;
      }else{
        this.router.navigateByUrl("/");
      }

    }else{
      this.router.navigateByUrl("/");
    }
  }
  
  
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
import { UserRole } from '../model/user-role';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService: CommonService) { }

  // Login API //
  postLogin(url, email): Observable<any> {

    return this.commonService.post(url, email)
      .pipe(
        map((data) => data),

        //tap(data => console.log('Service - login',data)),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }


  // Resend Login API //
  loginVerify(url, body): Observable<User> {

    return this.commonService.post(url, body)
      .pipe(
        map((data) => data),

        //tap(data => console.log('Service - login',data)),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }

  // Logout API //
  postLogout(url, jsonbody): Observable<User> {

    return this.commonService.post(url, jsonbody)
      .pipe(

        
        map((data) => data),
        
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }


  // User Role //
  postUserRole(url, Jsonbody): Observable<UserRole> {

    return this.commonService.putWithHeader(url, Jsonbody)
      .pipe(
        map((data) => data),

        //tap(data => console.log('Service - login',data)),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }

}

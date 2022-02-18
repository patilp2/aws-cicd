import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import * as UserActions from 'src/app/store/action/user.actions';
import * as ResendActions from 'src/app/store/action/resend.actions';
import { getResendVerify, getUserLoading, getUserVerify, RootReducerState } from '../store/reducer';
import { User } from '../model/user';


@Injectable({
    providedIn: 'root'
})

export class UserRepository {
    

    constructor(private store: Store<RootReducerState>, private authService: AuthService) { }


    verifyLogin(url, Jsonbody): [Observable<User>] {
       
        const userVerifyData = this.store.select(getUserVerify);

            this.authService.loginVerify(url, Jsonbody).subscribe(res => { 
                console.log("Login verify respose on repository", res);
                this.store.dispatch(new UserActions.LoadUsersSuccess( {data : res} ));

            }, error => {
                console.log('error homlist repo', error.error.message)
            });

        return [ userVerifyData];


    }
    
}   
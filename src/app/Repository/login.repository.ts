import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { getLogin, getLoginLoading, getOtpVerify, getOtpVerifyLoaded, getOtpVerifyLoading, RootReducerState, getRefeshToken, getRefeshTokenLoaded, getRefeshTokenLoading } from '../store/reducer';
import * as LoginActions from 'src/app/store/action/login.actions';
import * as OtpVerifyActions from 'src/app/store/action/otp-verify.actions'
import * as RefreshTokenActions from 'src/app/store/action/refresh-token.actions'


@Injectable({
    providedIn: 'root'
})

export class LoginRepository {

    constructor(private store: Store<RootReducerState>, private authService: AuthService) { }

    loginEmail(url, email): [Observable<any>] {

        const postEmailData = this.store.select(getLogin);

        //this.store.dispatch(new LoginActions.LoadLogins());

        this.authService.postLogin(url, email).subscribe(res => {

            this.store.dispatch(new LoginActions.LoadLoginsEmailSuccess({ data: res }));
            console.log('First login repo data', res)

        }, 
        error => {
            console.log('error login repo', error.error.message)
        });

        return [postEmailData];

    }


    OtpVerify(url, body,force = false): [Observable<boolean>, Observable<User>] {

        const otpVerifyLoading$ = this.store.select(getOtpVerifyLoading);
        const otpVerifyLoaded$ = this.store.select(getOtpVerifyLoaded);
        const postOTPData = this.store.select(getOtpVerify);

        combineLatest([otpVerifyLoaded$, otpVerifyLoading$]).subscribe((data) => {

            if ((!data[0] && !data[1]) || force) {

                //this.store.dispatch(new OtpVerifyActions.LoadOtpVerifys({ data }));

                this.authService.postLogin(url, body).subscribe(resp => {
                    console.log("Login otp verify", resp);
                    this.store.dispatch(new OtpVerifyActions.LoadOtpVerifysSuccess({ data: resp }));
                });
            }
        });

        return [otpVerifyLoaded$, postOTPData];

    }


    RefreshToken(url, body): [Observable<boolean>, Observable<User>] {

        const RefeshTokenLoading$ = this.store.select(getRefeshTokenLoading);
        const RefeshTokenLoaded$ = this.store.select(getRefeshTokenLoaded);
        const postRefreshData = this.store.select(getRefeshToken);

        combineLatest([RefeshTokenLoaded$, RefeshTokenLoading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new RefreshTokenActions.LoadRefresh({ data }));

                this.authService.postLogin(url, body).subscribe(resp => {
                    console.log("Login get RefreshToken", resp);
                    this.store.dispatch(new RefreshTokenActions.LoadRefreshTokenSuccess({ data: resp }));
                });
            }
        });

        return [RefeshTokenLoaded$, postRefreshData];
        
    }

    // loginResend(url, body): [Observable<any>] {

    //     const resendData = this.store.select(getLogin);

    //     //this.store.dispatch(new LoginActions.LoadLogins());

    //     this.authService.resendLogin(url, body).subscribe(data => {

    //         this.store.dispatch(new LoginActions.LoadLoginsOTPSuccess({ data: data }));
    //         console.log('Resend login repo data', data)

    //     }, 
    //     error => {
    //         console.log('error login repo', error.error.message)
    //     });

    //     return [resendData];

    // }




}

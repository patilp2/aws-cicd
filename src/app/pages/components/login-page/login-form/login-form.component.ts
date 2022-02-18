import { Component, OnInit } from '@angular/core';
import { LoginRepository } from 'src/app/Repository/login.repository';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { UserRepository } from 'src/app/Repository/user.repository';
import { CommonService } from 'src/app/service/common.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public email_phone;
  Otpmodel;
  emailValid = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  otpflag = false;
  otpMessage = true;
  jsonBody = {};
  otpflags = false;
  otp;
  showOtpComponent = true;
  resendOTPFlag = false;
  mtmSec1;
  mtick = 1000;
  countDownMobile;
  mtime1;
  countDown;
  testvalue;
  user_role;
  loginDone;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userRepository: UserRepository,
    private loginRepository: LoginRepository,private commonService:CommonService,
    private authService : AuthService
  ) {}

  ngOnInit(): void {

    console.log("check otp verify",window.localStorage.getItem('loginDone'));
    if(window.localStorage.getItem('loginDone') === 'true'){
      this.router.navigate(['/user-role']);
      console.log("otp verify done",true);

    }

  }

  // --- otp validate --- //
  config = {
    length: 6,
    inputStyles: {
      width: '40px',
      height: '40px',
    },
  };

  login() {
    if (this.email_phone.match(this.emailValid)) {
      this.jsonBody['email_or_mobile'] = this.email_phone;
    } else {
      this.jsonBody['email_or_mobile'] = '+91' + this.email_phone;
    }

    let url = '/auth/register-login/';
    const Jsonbody = this.jsonBody;
    // const LoginUser$ = this.userRepository.verifyLogin(url, Jsonbody)[0];
    // LoginUser$.subscribe(
      this.authService.loginVerify(url, Jsonbody).subscribe(
      (data) => {

        if (data === undefined || data === null) {
          //console.log('Login data Component');
        } else {
          this.toastr.success('OTP Send Successfully!');
          console.log('Login data Component', data);
          this.otpMessage = false;
          this.otpflag = true;
          this.timeCounter('00:04:59');
          this.resendOTPFlag = false;
        }
      },
      (error) => {
        console.log('login error record', error.error);
        this.toastr.error(error.error);
      }
    );
  }

  ngDoCheck() {
    if (this.mtmSec1 == 0) {
      this.resendOTPFlag = true;
    } else {
      this.resendOTPFlag = false;
    }
  }

  // OTP counter //
  timeCounter(catche) {
    this.mtime1 = catche;
    var a = this.mtime1.split(':'); // split it at the colons
    this.mtmSec1 = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    this.countDownMobile = Observable.timer(0, this.mtick)
      .take(this.mtmSec1)
      .map(() => --this.mtmSec1);
  }

  // ---- Onchange OTP  ---- //
  onOtpChange(otp) {
    this.otp = otp;
  }

  // ---- OTP Verify ---- //
  optVerify() {
    let url = '/auth/token/';
    this.jsonBody['token'] = this.otp;
    const body = this.jsonBody;
    console.log('otp verify', this.jsonBody);

    const LoginUserOtp$ = this.loginRepository.OtpVerify(url, body)[1];
    LoginUserOtp$.subscribe(
      (data) => {
        if (data == undefined || data == null) {
        } else {
          console.log('Otp Verify', data);
          this.toastr.success('OTP Verified Successfully !');

          window.localStorage.removeItem('access_token');
          window.localStorage.removeItem('refresh_token');

          window.localStorage.setItem(
            'access_token',
            data['data'].result.access
          );
          window.localStorage.setItem(
            'refresh_token',
            data['data'].result.refresh
          );

          let access_token = jwt_decode(data['data'].result.access);
          console.log('access token decode', access_token);

          this.user_role = access_token['type'];

          // if (window.localStorage.getItem('token') != '' || window.localStorage.getItem('token') != undefined) {
          //   // setTimeout(() => {
          //   //   this.refreshToken()
          //   // }, 2000);
          // } else {
          // }

          let check = window.localStorage.getItem('pageRedirectEvent');

          if(this.user_role == ''){
          //if(this.user_role == 'General'){

            this.router.navigate(['/user-role']);
            window.localStorage.setItem('loginDone', 'true');
            console.log("check true");
  
          }else{

            if (check == 'true') {
              this.router.navigate(['/project-upload']);
            }
            else if(window.localStorage.getItem('EnquireFlag') == "true"){
              this.router.navigate(['/message']);
            } else {
              this.router.navigate(['/profile-details']);
            }

          }
        }
      },
      // (error) => {
      //   console.log('Otp Verify error 2 nd ', error.error);
      //   this.toastr.error(error);
      // }
    );
  }
  





}

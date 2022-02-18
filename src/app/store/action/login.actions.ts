import { Action } from '@ngrx/store';
import { User } from '../../model/user';

export enum LoginActionTypes {
  LoadLogins = '[Login] Load Logins',
  LoadLoginsEmailSuccess = '[Login] Load Logins Email Success',
  LoadLoginsOTPSuccess = '[Login] Load Logins OTP Success',
  LoadLoginsSuccess = '[Login] Load Logins Success',
  LoadLoginsFailure = '[Login] Load Logins Failure',
}

export class LoadLogins implements Action {
  readonly type = LoginActionTypes.LoadLogins;
}

export class LoadLoginsEmailSuccess implements Action {
  readonly type = LoginActionTypes.LoadLoginsEmailSuccess;
  constructor(public payload?: { data: any }) { }


}

export class LoadLoginsOTPSuccess implements Action {
  readonly type = LoginActionTypes.LoadLoginsOTPSuccess;
  constructor(public payload: any) { }
}

export class LoadLoginsSuccess implements Action {
  readonly type = LoginActionTypes.LoadLoginsSuccess;
  constructor(public payload: any) { }
}


export class LoadLoginsFailure implements Action {
  readonly type = LoginActionTypes.LoadLoginsFailure;
  constructor(public payload: any) { }
}

export type LoginActions = LoadLogins | LoadLoginsEmailSuccess | LoadLoginsOTPSuccess | LoadLoginsSuccess | LoadLoginsFailure;



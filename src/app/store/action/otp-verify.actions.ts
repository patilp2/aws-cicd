import { Action } from '@ngrx/store';

export enum OtpVerifyActionTypes {
  LoadOtpVerifys = '[OtpVerify] Load OtpVerifys',
  LoadOtpVerifysSuccess = '[OtpVerify] Load OtpVerifys Success',
  LoadOtpVerifysFailure = '[OtpVerify] Load OtpVerifys Failure',
}

export class LoadOtpVerifys implements Action {
  readonly type = OtpVerifyActionTypes.LoadOtpVerifys;
  constructor(public payload: any) { }
}

export class LoadOtpVerifysSuccess implements Action {
  readonly type = OtpVerifyActionTypes.LoadOtpVerifysSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadOtpVerifysFailure implements Action {
  readonly type = OtpVerifyActionTypes.LoadOtpVerifysFailure;
  constructor(public payload: { error: any }) { }
}

export type OtpVerifyActions = LoadOtpVerifys | LoadOtpVerifysSuccess | LoadOtpVerifysFailure;


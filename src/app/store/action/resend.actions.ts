import { Action } from '@ngrx/store';

export enum ResendActionTypes {
  LoadResends = '[Resend] Load Resends',
  LoadResendsSuccess = '[Resend] Load Resends Success',
  LoadResendsFailure = '[Resend] Load Resends Failure',
}

export class LoadResends implements Action {
  readonly type = ResendActionTypes.LoadResends;
}

export class LoadResendsSuccess implements Action {
  readonly type = ResendActionTypes.LoadResendsSuccess;
  constructor(public payload?: { data: any }) { }
}

export class LoadResendsFailure implements Action {
  readonly type = ResendActionTypes.LoadResendsFailure;
  constructor(public payload: { error: any }) { }
}

export type ResendActions = LoadResends | LoadResendsSuccess | LoadResendsFailure;


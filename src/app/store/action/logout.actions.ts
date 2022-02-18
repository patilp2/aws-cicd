import { Action } from '@ngrx/store';

export enum LogoutActionTypes {
  LoadLogouts = '[Logout] Load Logouts',
  LoadLogoutsSuccess = '[Logout] Load Logouts Success',
  LoadLogoutsFailure = '[Logout] Load Logouts Failure',
}

export class LoadLogouts implements Action {
  readonly type = LogoutActionTypes.LoadLogouts;
}

export class LoadLogoutsSuccess implements Action {
  readonly type = LogoutActionTypes.LoadLogoutsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadLogoutsFailure implements Action {
  readonly type = LogoutActionTypes.LoadLogoutsFailure;
  constructor(public payload: { error: any }) { }
}

export type LogoutActions = LoadLogouts | LoadLogoutsSuccess | LoadLogoutsFailure;


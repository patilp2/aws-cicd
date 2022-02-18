import { Action } from '@ngrx/store';

export enum RefeshTokenActionTypes {
  LoadRefresh = '[RefreshToken] Load RefreshToken',
  LoadRefreshTokenSuccess = '[RefreshToken] Load RefreshToken Success',
  LoadRefreshTokenFailure = '[RefreshToken] Load RefreshToken Failure',
}

export class LoadRefresh implements Action {
  readonly type = RefeshTokenActionTypes.LoadRefresh;
  constructor(public payload: any) { }
}

export class LoadRefreshTokenSuccess implements Action {
  readonly type = RefeshTokenActionTypes.LoadRefreshTokenSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadRefreshTokenFailure implements Action {
  readonly type = RefeshTokenActionTypes.LoadRefreshTokenFailure;
  constructor(public payload: { error: any }) { }
}

export type RefreshTokenActions = LoadRefresh | LoadRefreshTokenSuccess | LoadRefreshTokenFailure;
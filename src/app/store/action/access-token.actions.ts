import { Action } from '@ngrx/store';
import { AccessToken } from '../../model/access-token';

export enum AccessTokenActionTypes {
  LoadAccessTokens = '[AccessToken] Load AccessTokens',
  LoadAccessTokensSuccess = '[AccessToken] Load AccessTokens Success',
  LoadAccessTokensFailure = '[AccessToken] Load AccessTokens Failure',
}

export class LoadAccessTokens implements Action {
  readonly type = AccessTokenActionTypes.LoadAccessTokens;
}

export class LoadAccessTokensSuccess implements Action {
  readonly type = AccessTokenActionTypes.LoadAccessTokensSuccess;
  constructor(public payload?: { data: AccessToken }) { }
}

export class LoadAccessTokensFailure implements Action {
  readonly type = AccessTokenActionTypes.LoadAccessTokensFailure;
  constructor(public payload: { error: any }) { }
}

export type AccessTokenActions = LoadAccessTokens | LoadAccessTokensSuccess | LoadAccessTokensFailure;


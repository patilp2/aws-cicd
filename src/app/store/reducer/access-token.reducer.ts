import { Action } from '../action';
import { AccessToken } from '../../model/access-token';
import { AccessTokenActionTypes } from '../action/access-token.actions';


export const accessTokenFeatureKey = 'accessToken';

export interface AccessTokenReducerState {  
  loadingToken: boolean;
  accessToken: AccessToken | null;
}

export const initialState: AccessTokenReducerState = {
  loadingToken: false,
  accessToken: null,

};


export function AccessTokenReducer(state = initialState, action: Action): AccessTokenReducerState {


  switch (action.type) {

    case AccessTokenActionTypes.LoadAccessTokens: {
      
      return { ...state, loadingToken: true };
    }

    case AccessTokenActionTypes.LoadAccessTokensSuccess: {

      return { loadingToken: true , accessToken : action.payload };

    }

    default:
      return state;
  }
}

export const getAccessTokenLoading = (state: AccessTokenReducerState) => state.loadingToken;
export const getAccessToken = (state: AccessTokenReducerState) => state.accessToken;
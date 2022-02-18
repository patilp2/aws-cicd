import { Action } from '../action';
import { User } from '../../model/user';
import { RefeshTokenActionTypes } from '../action/refresh-token.actions';


export const otpRefeshTokenFeatureKey = 'refreshToken';

export interface refreshTokenReduceState {
  loaded: boolean;
  loading: boolean;
  userRefeshToken: User | null;
  error: any;

}

export const initialState: refreshTokenReduceState = {
  loaded: false,
  loading: false,
  userRefeshToken: null,
  error: null

};

export function refreshTokenReduce(state = initialState, action: Action): refreshTokenReduceState {
  switch (action.type) {

    case RefeshTokenActionTypes.LoadRefresh: {

      return { ...state, loading: true };
    }

    case RefeshTokenActionTypes.LoadRefreshTokenSuccess: {

      return { ...state, loading: false, loaded: true, userRefeshToken: action.payload };

    }


    default:
      return state;
  }
}



//selector 
export const getRefeshTokenLoading = (state: refreshTokenReduceState) => state.loading;
export const getRefeshTokenLoaded = (state: refreshTokenReduceState) => state.loaded;
export const getRefeshToken = (state: refreshTokenReduceState) => state.userRefeshToken;

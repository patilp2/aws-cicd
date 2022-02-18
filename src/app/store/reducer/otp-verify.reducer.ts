import { Action } from '../action';
import { User } from '../../model/user';
import { OtpVerifyActionTypes } from '../action/otp-verify.actions';


export const otpVerifyFeatureKey = 'otpVerify';

export interface OtpVerifyReduceState {
  loaded: boolean;
  loading: boolean;
  userOtpToken: User | null;
  error: any;

}

export const initialState: OtpVerifyReduceState = {
  loaded: false,
  loading: false,
  userOtpToken: null,
  error: null

};

export function OtpVerifyReduce(state = initialState, action: Action): OtpVerifyReduceState {
  switch (action.type) {

    case OtpVerifyActionTypes.LoadOtpVerifys: {

      return { ...state, loading: true };
    }

    case OtpVerifyActionTypes.LoadOtpVerifysSuccess: {

      return { ...state, loading: false, loaded: true, userOtpToken: action.payload };

    }


    default:
      return state;
  }
}



//selector 
export const getOtpVerifyLoading = (state: OtpVerifyReduceState) => state.loading;
export const getOtpVerifyLoaded = (state: OtpVerifyReduceState) => state.loaded;
export const getOtpVerify = (state: OtpVerifyReduceState) => state.userOtpToken;

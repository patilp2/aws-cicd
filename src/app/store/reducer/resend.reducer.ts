import { Action } from '../action';
import { ResendActionTypes } from '../action/resend.actions';


export interface ResendReducerState {
  loadingResend: boolean;
  resendVerify:  null;

}

export const initialState: ResendReducerState = {
  loadingResend: false,
  resendVerify: null,

};


export function ResendReducer(state = initialState, action: Action): ResendReducerState {
  switch (action.type) {

    case ResendActionTypes.LoadResends: {

      return { ...state, loadingResend: true };
    }


    case ResendActionTypes.LoadResendsSuccess: {

      return { ...state, loadingResend: true, resendVerify : action.payload };
    }

    default:
      return state;
  }
}


//selector 
export const getResendLoading = (state: ResendReducerState) => state.loadingResend;
export const getResendVerify = (state: ResendReducerState) => state.resendVerify;

import { Action } from '../action';
import { User } from '../../model/user';
import { LoginActionTypes } from '../action/login.actions';


export interface LoginReducerState {
  loading: boolean;
  users: User | null;
  error: any;
}

export const initialState: LoginReducerState = {
  loading: false,
  users: null,
  error: null
};


export function LoginReducer(state = initialState, action: Action): LoginReducerState {

  switch (action.type) {

    case LoginActionTypes.LoadLogins: {

      return { ...state, loading: true };
    }

    case LoginActionTypes.LoadLoginsEmailSuccess: {

      return { ...state, loading: true, users: action.payload };

    }

    case LoginActionTypes.LoadLoginsOTPSuccess: {

      
      return { ...state, loading: true, users: action.payload };

    }


    default:
      return state;
  }
}


//selector 
export const getLoginLoading = (state: LoginReducerState) => state.loading;
export const getLogin = (state: LoginReducerState) => state.users;

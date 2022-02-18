import { User } from 'src/app/model/user';
import { Action } from '../action';
import { UserActionTypes } from '../action/user.actions';
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface UserReducerState {
  loadingUser: boolean;
  userVerify: User | null;
}

export const initialState: UserReducerState = {
  loadingUser: false,
  userVerify: null,
};

export function UserReducer(state = initialState, action: Action): UserReducerState {


  switch (action.type) {

    case UserActionTypes.LoadUsers: {
      
      return { ...state, loadingUser: true };
    }

    case UserActionTypes.LoadUsersSuccess: {

      return { loadingUser: true , userVerify : action.payload };

    }

    default:
      return state;
  }
}





//selector 
export const getUserLoading = (state: UserReducerState) => state.loadingUser;
export const getUserVerify = (state: UserReducerState) => state.userVerify;
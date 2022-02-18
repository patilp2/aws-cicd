import { Action } from '../action';
import { User } from '../../model/user';


export interface LogoutReducerState {
  loaded: boolean;
  loading: boolean;
  users: User | null;
  error: any;

}

export const initialState: LogoutReducerState = {
  loaded: false,
  loading: false,
  users: null,
  error: null

};

export function LogoutReducer(state = initialState, action: Action): LogoutReducerState {
  switch (action.type) {

    default:
      return state;
  }
}

import { Action } from '../action';
import { UserRole } from '../../model/user-role';
import { UserRoleActionTypes } from '../action/user-role.actions';



export interface UserRoleState {
  loading: boolean;
  userRole: UserRole | null;

}

export const initialState: UserRoleState = {
  loading: false,
  userRole: null,

};

export function UserRoleReducer(state = initialState, action: Action): UserRoleState {
  switch (action.type) {

    case UserRoleActionTypes.LoadUserRoles: {

      return { ...state, loading: true };
    }

    case UserRoleActionTypes.LoadUserRolesSuccess: {

      return { ...state, loading: true, userRole: action.payload };

    }

    default:
      return state;
  }
}


//selector 
export const getUserRoleLoading = (state: UserRoleState) => state.loading;
export const getUserRole = (state: UserRoleState) => state.userRole;
import { Action } from '@ngrx/store';
import { UserRole } from '../../model/user-role';

export enum UserRoleActionTypes {
  LoadUserRoles = '[UserRole] Load UserRoles',
  LoadUserRolesSuccess = '[UserRole] Load UserRoles Success',
  LoadUserRolesFailure = '[UserRole] Load UserRoles Failure',
}

export class LoadUserRoles implements Action {
  readonly type = UserRoleActionTypes.LoadUserRoles;
}

export class LoadUserRolesSuccess implements Action {
  readonly type = UserRoleActionTypes.LoadUserRolesSuccess;
  constructor(public payload?: { data: UserRole }) { }
}

export class LoadUserRolesFailure implements Action {
  readonly type = UserRoleActionTypes.LoadUserRolesFailure;
  constructor(public payload: { error: any }) { }
}

export type UserRoleActions = LoadUserRoles | LoadUserRolesSuccess | LoadUserRolesFailure;


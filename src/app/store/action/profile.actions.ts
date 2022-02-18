import { Action } from '.';
import { Profile } from 'src/app/model/profile';

export enum ProfileActionTypes {
  LoadProfiles = '[Profile] Load Profiles',
  LoadProfilesSuccess = '[Profile] Load Profiles Success',
  ProfilesUpdate = '[Profile] Profiles Update',
  LoadProfilesFailure = '[Profile] Load Profiles Failure',
}

export class LoadProfiles implements Action {
  readonly type = ProfileActionTypes.LoadProfiles;
}

export class LoadProfilesSuccess implements Action {
  readonly type = ProfileActionTypes.LoadProfilesSuccess;
  constructor(public payload: { data: Profile[] }) { }
}

export class ProfilesUpdate implements Action {
  readonly type = ProfileActionTypes.ProfilesUpdate;
  constructor(public payload: { data: any }) { }
}

export class LoadProfilesFailure implements Action {
  readonly type = ProfileActionTypes.LoadProfilesFailure;
  constructor(public payload: { error: any }) { }
}

export type ProfileActions = LoadProfiles | LoadProfilesSuccess | ProfilesUpdate | LoadProfilesFailure;


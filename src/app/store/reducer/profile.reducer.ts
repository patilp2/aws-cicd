import { Action } from '../action';
import { Profile } from 'src/app/model/profile';
import { ProfileActionTypes } from '../action/profile.actions';


export interface ProfileReducerState {
  loading: boolean;
  loaded: boolean;
  profile: Profile[];
  profileUpdate: Profile | null;

}

export const initialState: ProfileReducerState = {
  loading: false,
  loaded: false,
  profile: [],
  profileUpdate: null,

};

export function ProfileReducer(state = initialState, action: Action): ProfileReducerState {
  switch (action.type) {

    case ProfileActionTypes.LoadProfiles: {
      return { ...state, loading: true };
    }

    case ProfileActionTypes.LoadProfilesSuccess: {
      const updateData = state.profile.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, profile: updateData };
    }

    case ProfileActionTypes.ProfilesUpdate: {
      const updateProfile = state.profile.concat(action.payload.data);
      return { ...state, profile: updateProfile };

    }


    default:
      return state;
  }
}


//selector 
export const getProfileLoading = (state: ProfileReducerState) => state.loading;
export const getProfileLoaded = (state: ProfileReducerState) => state.loaded;
export const getProfile = (state: ProfileReducerState) => state.profile;
export const profileUpdate = (state: ProfileReducerState) => state.profileUpdate;


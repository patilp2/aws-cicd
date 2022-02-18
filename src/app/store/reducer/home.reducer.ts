import { Home } from '../../model/home';
import { Action } from '../action';
import { HomesActionTypes } from '../action/home.actions';

export interface HomeReducerState {
  loading: boolean;
  loaded: boolean;
  homes: Home[];
}

export const initialState: HomeReducerState = {
  loading: false,
  loaded: false,
  homes: [],
};

export function HomeReducer(state = initialState, action: Action): HomeReducerState {

  switch (action.type) {

    case HomesActionTypes.LoadHomes: {
      return { ...state, loading: true };
    }

    case HomesActionTypes.LoadHomesSuccess: {
      const updateData = state.homes.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, homes: updateData };
    }

    default:
      return state;
  }
}


//selector 
export const getLoading = (state: HomeReducerState) => state.loading;
export const getLoaded = (state: HomeReducerState) => state.loaded;
export const getHomes = (state: HomeReducerState) => state.homes;
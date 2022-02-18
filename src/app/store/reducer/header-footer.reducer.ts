import { HeaderFooter } from '../../model/header-footer';
import { Action } from '../action';
import { HeaderFooterActionTypes } from '../action/header-footer.actions';


export interface HeaderFooterReducerState {
  loading: boolean;
  loaded: boolean;
  headers: HeaderFooter[];
}

export const initialState: HeaderFooterReducerState = {
  loading: false,
  loaded: false,
  headers: [],
};


export function HeaderFooterReducer(state = initialState, action: Action): HeaderFooterReducerState {
  switch (action.type) {

    case HeaderFooterActionTypes.LoadHeaderFooters: {
      return { ...state, loading: true };
    }

    case HeaderFooterActionTypes.LoadHeaderFootersSuccess: {
      const updateData = state.headers.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, headers: updateData };
    }

    default:
      return state;
  }
}

//selector 
export const getLoading = (state: HeaderFooterReducerState) => state.loading;
export const getLoaded = (state: HeaderFooterReducerState) => state.loaded;
export const getHeaderFooter = (state: HeaderFooterReducerState) => state.headers;

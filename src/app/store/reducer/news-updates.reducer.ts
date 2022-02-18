import { newsUpdatedata } from 'src/app/model/news-updates';
import { Action } from '../action';
import {NewsUpdateActionTypes } from '../action/news-updates.actions'

export interface NewsUpdateReducerState {
  loading: boolean;
  loaded: boolean;
  newsUpdate: newsUpdatedata[];
}

export const initialState: NewsUpdateReducerState = {
  loading: false,
  loaded: false,
  newsUpdate: [],
};

export function NewsUpdateReducer(state = initialState, action: Action): NewsUpdateReducerState {

  switch (action.type) {

    case NewsUpdateActionTypes.LoadNewsUpate: {
      return { ...state, loading: true };
    }

    case NewsUpdateActionTypes.LoadNewsUpateSuccess: {
      const updateData = state.newsUpdate.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, newsUpdate: updateData };
    }

    default:
      return state;
  }
}


//selector 
export const getLoading = (state: NewsUpdateReducerState) => state.loading;
export const getLoaded = (state: NewsUpdateReducerState) => state.loaded;
export const getNewupdates = (state: NewsUpdateReducerState) => state.newsUpdate;

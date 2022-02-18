import { commentDetails } from '../../model/comment';
import { Action } from '../action';
import { LoadComment, LoadgetcommnetSuccess } from '../action/get-comment.actions';

export interface getcommentReducerState {
  loading: boolean;
  loaded: boolean;
  getCommentdata: commentDetails[];
}

export const initialState: getcommentReducerState = {
  loading: false,
  loaded: false,
  getCommentdata: [],
};

export function getcommentReducer(state = initialState, action: Action): getcommentReducerState {

  switch (action.type) {

    case LoadComment: {
      return { ...state, loading: true };
    }

    case LoadgetcommnetSuccess: {
      const updateGetComment = state.getCommentdata.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, getCommentdata: updateGetComment };

    }

    default:
      return state;
  }
}


//selector 
export const getCommentLoading = (state: getcommentReducerState) => state.loading;
export const getCommentLoaded = (state: getcommentReducerState) => state.loaded;
export const getComment = (state: getcommentReducerState) => state.getCommentdata;

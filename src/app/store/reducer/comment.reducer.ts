import { CommentDetails } from '../../model/comment';
import { Action } from '../action';
import { CommentActionTypes } from '../action/comment.actions';

export interface CommentReducerState {
  loading: boolean;
  loaded: boolean;
  getCommentdata: CommentDetails[];
  postComment: CommentDetails | null;

}

export const initialState: CommentReducerState = {
  loading: false,
  loaded: false,
  getCommentdata: [],
  postComment: null,

};

export function CommentReducer(state = initialState, action: Action): CommentReducerState {

  switch (action.type) {

    case CommentActionTypes.LoadComment: {
      return { ...state, loading: true };
    }

    case CommentActionTypes.LoadCommentSuccess: {
      const updateGetComment = state.getCommentdata.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, getCommentdata: updateGetComment };

    }

    case CommentActionTypes.AddCommentAction: {

      const updateGetComment = state.getCommentdata.concat(action.payload.data);
      return { ...state, getCommentdata: updateGetComment };

    }

    case CommentActionTypes.DeleteCommentAction: {
      return { ...state, loading: false, loaded: true, getCommentdata: action.payload };

    }



    default:
      return state;
  }
}


//selector 
export const getCommentLoading = (state: CommentReducerState) => state.loading;
export const getCommentLoaded = (state: CommentReducerState) => state.loaded;
export const getComment = (state: CommentReducerState) => state.getCommentdata;
export const postComment = (state: CommentReducerState) => state.postComment;
export const deleteComment = (state: CommentReducerState) => state.getCommentdata;

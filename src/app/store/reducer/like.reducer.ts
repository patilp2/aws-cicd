import { likepost,countdetails } from '../../model/like';
import { Action } from '../action';
import { LikeActionTypes}  from  '../action/like.actions';

export interface LikeReducerState {
  loading:boolean;
  loaded:boolean;
  likedata: countdetails[];
  likePostdata: likepost[];

}

export const initialState: LikeReducerState = {
  loading:false,
  loaded:false,
  likedata: [],
  likePostdata: null,

};

export function LikeReducer(state = initialState, action: Action): LikeReducerState {

  switch (action.type) {

    case LikeActionTypes.LoadLike:{
      return {...state,loading: true};
    }

    case LikeActionTypes.LoadLikeSuccess: {
      const updateGetComment = state.likedata.concat(action.payload.data);
      return {...state,loading: false,loaded: true,likedata: updateGetComment};

    }
    case LikeActionTypes.LikePostAction: {
      const postLikeData = state.likedata.concat(action.payload.data);
      return { ...state, likedata: postLikeData };
    }


    default:
      return state;
  }
}


//selector 
export const getLikeLoading = (state: LikeReducerState) => state.loading;
export const getLikeLoaded = (state: LikeReducerState) => state.loaded;
export const getLike = (state: LikeReducerState) => state.likedata;
export const postLike = (state: LikeReducerState) => state.likePostdata;


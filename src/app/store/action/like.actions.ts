import { likepost } from "../../model/like";
import { Action } from '@ngrx/store';


export enum LikeActionTypes {
  LoadLike = 'Load like',
  LoadLikeSuccess = 'Load like Success',
  LoadLikeFailure = 'Load like Failure',
  LikePostAction = 'Load Like Post',
  LoadPostLikeSuccess = 'Load like Success',


}

export class LikeAction implements Action {
  readonly type = LikeActionTypes.LoadLike;
}

export class LikeSuccessAction implements Action {
  readonly type = LikeActionTypes.LoadLikeSuccess;
  constructor(public payload: any) { }
}
export class LikePostAction implements Action {
  readonly type = LikeActionTypes.LikePostAction;
  constructor(public payload?: { data: likepost[] }) { }
}
export class LikePostSuccessAction implements Action {
  readonly type = LikeActionTypes.LoadPostLikeSuccess;
  constructor(public payload?: { data: likepost[] }) { }
}


export type LikeActions = LikeAction | LikeSuccessAction | LikePostAction | LikePostSuccessAction;
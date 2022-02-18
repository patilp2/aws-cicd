import { CommentDetails } from "../../model/comment";
import { Action } from '@ngrx/store';

export enum CommentActionTypes {
  LoadComment = 'Load comment',
  LoadCommentSuccess = 'Load comment Success',
  LoadgetcommentFailure = 'Load comment Failure',
  AddCommentAction = "Add Comment Action",
  DeleteCommentAction = "Delete Comment Action"

}

export class LoadCommentAction implements Action {
  readonly type = CommentActionTypes.LoadComment;
}

export class CommentSuccessAction implements Action {
  readonly type = CommentActionTypes.LoadCommentSuccess;
  constructor(public payload?: { data: CommentDetails[] }) { }
}

export class AddCommentAction implements Action {
  readonly type = CommentActionTypes.AddCommentAction;
  constructor(public payload?: { data: CommentDetails }) { }
}

export class DeleteCommentAction implements Action {
  readonly type = CommentActionTypes.AddCommentAction;
  constructor(public payload: any) { }

}


export type CommentActions = LoadCommentAction | CommentSuccessAction | AddCommentAction | DeleteCommentAction;

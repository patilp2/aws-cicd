import { newsUpdatedata } from 'src/app/model/news-updates';
import { Action } from '.';


export enum NewsUpdateActionTypes {
  LoadNewsUpate = 'Load NewsUpate',
  LoadNewsUpateSuccess = 'Load NewsUpate Success',
  LoadNewsUpateFailure = 'Load NewsUpate Failure',
}

export class LoadNewsUpate implements Action {
  readonly type = NewsUpdateActionTypes.LoadNewsUpate;
}

export class LoadNewsUpateSuccess implements Action {
  readonly type = NewsUpdateActionTypes.LoadNewsUpateSuccess;
  constructor(public payload?: { data: any[]}) { }
}

export type NewsUpdateActions = LoadNewsUpate | LoadNewsUpateSuccess;


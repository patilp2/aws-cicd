import { Action } from '.';
import { HeaderFooter } from 'src/app/model/header-footer';

export enum HeaderFooterActionTypes {
  LoadHeaderFooters = '[HeaderFooter] Load HeaderFooters',
  LoadHeaderFootersSuccess = '[HeaderFooter] Load HeaderFooters Success',
  LoadHeaderFootersFailure = '[HeaderFooter] Load HeaderFooters Failure',
}

export class LoadHeaderFooters implements Action {
  readonly type = HeaderFooterActionTypes.LoadHeaderFooters;
}

export class LoadHeaderFootersSuccess implements Action {
  readonly type = HeaderFooterActionTypes.LoadHeaderFootersSuccess;
  constructor(public payload?: { data: HeaderFooter[]  }) { }
}

export class LoadHeaderFootersFailure implements Action {
  readonly type = HeaderFooterActionTypes.LoadHeaderFootersFailure;
  constructor(public payload: { error: any }) { }
}

export type HeaderFooterActions = LoadHeaderFooters | LoadHeaderFootersSuccess | LoadHeaderFootersFailure;


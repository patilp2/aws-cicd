import { Home } from 'src/app/model/home';
import { Action } from '.';

export enum HomesActionTypes {
  LoadHomes = 'Load Homes',
  LoadHomesSuccess = 'Load Homes Success',
  LoadHomesFailure = 'Load Homes Failure',
}

export class LoadHomes implements Action {
  readonly type = HomesActionTypes.LoadHomes;
}

export class LoadHomesSuccess implements Action {
  readonly type = HomesActionTypes.LoadHomesSuccess;
  constructor(public payload?: { data: Home[] }) { }
}

export type HomesActions = LoadHomes | LoadHomesSuccess;

import { Action } from '@ngrx/store';
import { messagethread, resultdetails } from '../../model/message'
export enum MessageActionTypes {
  LoadMessage = '[Message] Load Message',
  LoadMessageSuccess = '[Message] Load Message Success',
  LoadMessageFailure = '[Message] Load Message Failure',
  LoadMessageInbox = '[Message] Load Message Inbox',
  LoadMessageInboxSuccess = '[Message] Load Message Inbox Success',
  LoadMessageThread = '[Message] Load Message Thread ',
  LoadMessageThreadSuccess = '[Message] Load Message Thread Success',

}

export class LoadMessage implements Action {
  readonly type = MessageActionTypes.LoadMessage;
  constructor(public payload: any) { }
}

export class LoadMessageSuccess implements Action {
  readonly type = MessageActionTypes.LoadMessageSuccess;
  constructor(public payload: any) { }
}


export class LoadMessageFailure implements Action {
  readonly type = MessageActionTypes.LoadMessageFailure;
  constructor(public payload: any) { }
}

export class LoadMessageInbox implements Action {
  readonly type = MessageActionTypes.LoadMessageInbox;
}

export class LoadMessageInboxSuccess implements Action {
  readonly type = MessageActionTypes.LoadMessageInboxSuccess;
  constructor(public payload?: { data: resultdetails[] }) { }
}
export class LoadMessageThread implements Action {
  readonly type = MessageActionTypes.LoadMessageThread;
}

export class LoadMessageThreadSuccess implements Action {
  readonly type = MessageActionTypes.LoadMessageThreadSuccess;
  constructor(public payload?: { data: messagethread[] }) { }
}


export type MessageActions = LoadMessage | LoadMessageSuccess | LoadMessageFailure | LoadMessageInbox | LoadMessageInboxSuccess | LoadMessageThread | LoadMessageThreadSuccess;



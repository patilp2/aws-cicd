import { Action } from '../action';
import { MessageDetails, messagethread, resultdetails } from '../../model/message';
import { MessageActionTypes } from '../action/message.actions';
export interface MessageReducerState {
  loaded: boolean;
  loading: boolean;
  postMessage: MessageDetails[];
  results: resultdetails[];
  messagethreads: messagethread[]
  error: any;
}

export const initialState: MessageReducerState = {
  loaded: false,
  loading: false,
  postMessage: [],
  results: [],
  messagethreads: [],
  error: null,
};


export function MessageReducer(state = initialState, action: Action): MessageReducerState {

  switch (action.type) {

    case MessageActionTypes.LoadMessage: {

      return { ...state, loading: true };
    }

    case MessageActionTypes.LoadMessageSuccess: {

      return { ...state, loading: false, loaded: true, results: action.payload };

    }
    case MessageActionTypes.LoadMessageInbox: {

      return { ...state, loading: true };
    }

    case MessageActionTypes.LoadMessageInboxSuccess: {
      const getmessageInbox = state.results.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, results: getmessageInbox };
    }
    case MessageActionTypes.LoadMessageThread: {

      return { ...state, loading: true };
    }

    case MessageActionTypes.LoadMessageThreadSuccess: {
      const getmessageThread = state.messagethreads.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, messagethreads: getmessageThread };
    }

    default:
      return state;
  }
}


//selector 
export const getMessageLoading = (state: MessageReducerState) => state.loading;
export const getMessageLoaded = (state: MessageReducerState) => state.loaded;
export const postMessage = (state: MessageReducerState) => state.postMessage;
export const getMessageInbox = (state: MessageReducerState) => state.results
export const getMessageThread = (state: MessageReducerState) => state.messagethreads;

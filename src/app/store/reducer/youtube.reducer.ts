import { youtubeDetails } from 'src/app/model/youtube';
import { Action } from '../action';
import { YoutubActionTypes } from '../action/youtube.actions';

export interface YoutubeReducerState {
  loading: boolean;
  loaded: boolean;
  youtubeDetails: youtubeDetails[];
}

export const initialState: YoutubeReducerState = {
  loading: false,
  loaded: false,
  youtubeDetails: [],
};

export function youtubeReducer(state = initialState, action: Action): YoutubeReducerState {

  switch (action.type) {

    case YoutubActionTypes.LoadPlaylist: {
      return { ...state, loading: true };
    }

    case YoutubActionTypes.LoadplaylistSuccess: {
      const updateData = state.youtubeDetails.concat(action.payload.data);
      return { ...state, loading: false, loaded: true, youtubeDetails: updateData };
    }

    default:
      return state;
  }
}


//selector 
export const getPlaylistLoading = (state: YoutubeReducerState) => state.loading;
export const getPlaylistLoaded = (state: YoutubeReducerState) => state.loaded;
export const getPlaylistyoutubes = (state: YoutubeReducerState) => state.youtubeDetails;
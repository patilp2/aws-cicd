import { youtubeDetails } from 'src/app/model/youtube';
import { Action } from '.';

export enum YoutubActionTypes {
  LoadPlaylist = 'Load playlist',
  LoadplaylistSuccess = 'Load playlist Success',
  LoadplaylistFailure = 'Load playlist Failure',
}

export class LoadPlaylist implements Action {
  readonly type = YoutubActionTypes.LoadPlaylist;
}

export class LoadplaylistSuccess implements Action {
  readonly type = YoutubActionTypes.LoadplaylistSuccess;
  constructor(public payload?: { data: youtubeDetails[] }) { }
}

export type YoutubeActions = LoadPlaylist | LoadplaylistSuccess;

/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />
/// <reference path="../../../node_modules/@types/gapi/index.d.ts" />
import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import BasicProfile = gapi.auth2.BasicProfile;
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private auth: GoogleAuth = null;
  private user$ = new BehaviorSubject<GoogleUser>(null);
  public isSignedIn$ = new BehaviorSubject<any>(false);
  public isAuthInit$ = new BehaviorSubject<any>(false);
  public profile$: BehaviorSubject<BasicProfile>;
  private accessToken: string | null = null;
  apiKey: string = 'AIzaSyC1JXxluLLPpowvdV7y0UCU8pvYo9d-HDM';

  constructor(private httpClient: HttpClient, private zone: NgZone) {
    gapi.load('auth2', () => {
      this.zone.run(() => {
        // this.initAuth();
      });
    });
    this.profile$ = this.user$.pipe(map(user => user && user.getBasicProfile()
      ? user.getBasicProfile() : null)) as BehaviorSubject<BasicProfile>;
    this.user$.subscribe((user) => {
      if (user) {
        this.accessToken = user.getAuthResponse().access_token;
      }
    });
  }
  initAuth() {
    const params = {
      clientId: '694845896057-3bte2mc78ed136spufv2l6ecglrglsil.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      scope: [
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.upload'
      ].join(' ')
    };
    const auth = gapi.auth2.init(params);
    auth.then(() => this.zone.run(() => {
      this.auth = auth;
      this.isAuthInit$.next(true);
    })).catch((error) => {
      console.log(error, 'auth failed');
    });

    auth.isSignedIn.listen((value) => this.zone.run(() => {
      this.isSignedIn$.next(value);
      if (!value) {
        this.user$.next(null);
      }
    }));
    auth.currentUser.listen((user) => this.zone.run(() => {
      this.user$.next(user);
    }));
    if (auth.isSignedIn.get() === true) {
      auth.signIn();
    }
    this.zone.run(() => {
      this.user$.next(auth.currentUser.get());
    });
  }

  public signIn() {
    this.auth.signIn({ prompt: 'select_account' });
  }

  uploadVideo(video: any,
    input: {
      title: string, description: string,
      privacyStatus: string, tags?: string[],
    }) {
    console.log('service file data', video, input)
    if (!this.accessToken) {
      throw new Error('authentication is required');
    }
    const data = {
      snippet: {
        title: input.title,
        description: input.description,
        tags: input.tags,
        categoryId: 22
      },
      status: {
        privacyStatus: input.privacyStatus,
        embeddable: true
      }
    };
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.accessToken)
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('X-Upload-Content-Length', video.size + '')
      .set('X-Upload-Content-Type', 'video/*');

    const url = 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails';
    return this.httpClient.post(url, data, { headers, observe: 'response', responseType: 'text' })
      .pipe(switchMap(newData => {
        const newRequest = new HttpRequest('PUT', newData.headers.get('location'), video, { reportProgress: true });
        return this.httpClient.request(newRequest);
      }));
  }

  public signOut() {
    this.auth.signOut();
  }

  // Get you-tube videos 
  getVideosForChanel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id,get_duration&maxResults=' + maxResults
    return this.httpClient.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
  getDuration() {
    let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=DQ5w8LBI0kI&key=AIzaSyC1JXxluLLPpowvdV7y0UCU8pvYo9d-HDM"
    return this.httpClient.get(url).pipe(map((res) => {
      // return res
      console.log('hiiiii GetVideos data', res)
    }))
  }

  getPlaylistwiseData(url) {
    // let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLZAx1SN-3BQ81xXX8IF_7_YBqrabsExs3&key=AIzaSyC1JXxluLLPpowvdV7y0UCU8pvYo9d-HDM"
    return this.httpClient.get(url).pipe(map((res) => {
      return res
    }))
  }

  postVideosForChanel(video: any,
    input: {
      title: string, description: string,
      privacyStatus: string, tags?: string[],
    }) {
    const data = {
      snippet: {
        title: input.title,
        description: input.description,
        tags: input.tags,
        categoryId: 22
      },
      status: {
        privacyStatus: input.privacyStatus,
        embeddable: true
      }
    };
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ya29.A0ARrdaM8pW0mFy3ikD_Q9Tfo9KmnNjJp8OzIGnvPgZs_5JZfaxya-aexLLwWLL_SqhNSGt59Z3n9og5JIxaUfTR7xp8G2Jnb7efI-Jhi6hC3D877BKw0SNCRnrQTVATMJDgWpMmjDzQIMFNlaRY7LlaPwlP3y`)
      .set('Content-Type', 'multipart/form-data; charset=UTF-8')
      .set('X-Upload-Content-Length', video.size + '')
      .set('X-Upload-Content-Type', 'video/*')
      .set("Access-Control-Allow-Origin", "*")
      .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
      .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    console.log('hiiii yt serves data', data, video)
    let url = 'https://www.googleapis.com/upload/youtube/v3/videos'
    return this.httpClient.post(url, data, { headers, observe: 'response', responseType: 'text' })
      .pipe(switchMap(newData => {
        const newRequest = new HttpRequest('PUT', newData.headers.get('location'), video, { reportProgress: true });
        return this.httpClient.request(newRequest);
      }));
  }
}
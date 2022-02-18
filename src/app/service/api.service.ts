import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Home } from '../model/home';
import { CommonService } from './common.service';
import { ProjectDetails } from '../model/project-details';
import { CommentDetails } from '../model/comment';
import { Profile } from '../model/profile';
import { MessageDetails, messagethread, resultdetails } from '../model/message';
import { countdetails, likepost } from '../model/like';
import { newsUpdatedata  } from '../model/news-updates';
import { HeaderFooter } from '../model/header-footer';
import { youtubeDetails } from '../model/youtube';
import { YoutubeService } from './youtube.service';
import { AccessToken } from '../model/access-token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private commonService: CommonService,private youtubeService:YoutubeService) { }

  //private HomeUrl = '/api/v2/pages/?type=home.HomePage&fields=*';
  private HomeUrl = '/api/v2/pages/home/';
  //private ProfileUrl = '/api/v1/profile/e22b9e9f050846f18dec838420ace261/';


  // Get Header Footer //
  getHeaderFooter(url): Observable<HeaderFooter[]> {
    return this.commonService.get(url)
      .pipe(
        map(data => data as HeaderFooter[])
      );
  }

  // Get Home API //
  getHome(): Observable<Home[]> {

    return this.commonService.get(this.HomeUrl)
      .pipe(
        map(data => data as Home[]),
        //tap(data => console.log('Home - test data', data)),
        catchError(err => {
          console.log('getHome Error', err);
          return of([]);
        })
      );
  }

  // Get Project Details  //
  getProjetDetails(url): Observable<ProjectDetails[]> {
    return this.commonService.get(url)
      .pipe(
        map(data => data as ProjectDetails[])
      );
  }

  // Get Comment //
  getComment(url): Observable<CommentDetails[]> {
    return this.commonService.get(url)
      .pipe(
        map(data => data as CommentDetails[])
      );
  }

  // Add Comment //
  postComment(url, jsonbody): Observable<CommentDetails> {
    return this.commonService.postWithHeader(url, jsonbody)
      .pipe(
        map((data) => data),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }


  // Get Access Token //
  postAccessToken(url, jsonbody): Observable<AccessToken> {
    return this.commonService.post(url, jsonbody)
      .pipe(
        map((data) => data),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }

  // Delete Comment //
  deleteComment(url): Observable<CommentDetails> {
    return this.commonService.deleteWithHeader(url)
      .pipe(
        map((data) => data),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }

  // Get Profile //
  getProfile(url): Observable<Profile[]> {
    return this.commonService.getWithHeader(url)
      .pipe(
        map(data => data as Profile[])
      );
  }

  // Update Profile //
  profileUpdate(url, jsonbody): Observable<Profile> {
    return this.commonService.patchWithHeader(url, jsonbody)
      .pipe(
        map((data) => data),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }

  // Create message
  postMessage(url, json): Observable<MessageDetails> {
    return this.commonService.postWithHeader(url, json).pipe(map(data => data))
  }

  // Get message inbox
  getMessage(url): Observable<resultdetails[]> {
    return this.commonService.getWithHeader(url).pipe(map(data => data as resultdetails[]))
  }

  // Get message thread
  getMessageThread(url): Observable<messagethread[]> {
    return this.commonService.getWithHeader(url).pipe(map(data => data as messagethread[]))
  }

  // Like
  getLike(url): Observable<countdetails[]> {
    return this.commonService.getWithHeader(url).pipe(map(data => data as countdetails[]))
  }

  postlike(url, jsonbody): Observable<likepost[]> {
    return this.commonService.postWithHeader(url, jsonbody)
      .pipe(
        map((data) => data),
        catchError(err => {
          console.log('postlike fuction error', err);
          return of([]);
        })
      );
  }

  // get News and update
  
   getNewsupdate(url): Observable<newsUpdatedata[]> {
    return this.commonService.get(url)
      .pipe(
        map(data => data as newsUpdatedata[]),
        // tap(data => console.log('newsdata - test data', data)),
        catchError(err => {
          return of([]);
        })
      );
  }

  // get youtube playlist data
  
  getPlylistData(url): Observable<youtubeDetails[]> {
    return this.youtubeService.getPlaylistwiseData(url)
      .pipe(
        map(data => data as youtubeDetails[]),
        // tap(data => console.log('newsdata - test data', data)),
        catchError(err => {
          return of([]);
        })
      );
  }
}

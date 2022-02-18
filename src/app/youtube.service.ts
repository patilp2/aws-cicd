import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private httpClient: HttpClient) { }

  uploadVideoData(video_upload,
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

      console.log(video_upload);

      // const headers = new HttpHeaders()
      // //.set('Authorization', 'Bearer ' + this.accessToken)
      // .set('Content-Type', 'application/json; charset=UTF-8')
      // .set('X-Upload-Content-Length', video.size + '')
      // .set('X-Upload-Content-Type', 'video/*');

      // const url = 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails';
      // return this.httpClient.post(url, data, { observe: 'response', responseType: 'text'})
      //   .pipe(switchMap(newData => {
      //     const newRequest = new HttpRequest('PUT', newData.headers.get('location'), video_upload, {reportProgress: true});
      //     return this.httpClient.request(newRequest);
      //   }));

      // const headers = new HttpHeaders()
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json; charset=UTF-8');

      // const url = 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails';
      
      // return this.httpClient.put(url,{ headers });

  

  }
      


}

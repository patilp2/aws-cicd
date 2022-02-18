import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  private apiURL = environment.apiURL;
  constructor(private httpClient: HttpClient, private route: Router, private toastr: ToastrService, private translate: TranslateService) { }


  // Get API //
  get(url: string): Observable<any> {
    return this.httpClient.get(this.apiURL + url)
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  // Post call without header API //
  post(url: string, jsonbody): Observable<any> {
    return this.httpClient.post(this.apiURL + url, jsonbody)
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  // Get call with header API
  getWithHeader(url): Observable<any> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.httpClient.get(this.apiURL + url, { headers: headers })
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  // Delete call with header API // 
  deleteWithHeader(url: string): Observable<any> {
    return this.httpClient.delete(this.apiURL + url, { headers: this.getAuthHeader() })
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  // Patch call with header API //
  patchWithHeader(url, jsonbody): Observable<any> {
    return this.httpClient.patch(this.apiURL + url, jsonbody, { headers: this.getAuthHeader() })
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  // Get Header Authentication //
  getAuthHeader(): { [header: string]: string | string[]; } {
    console.log('service header token', localStorage.getItem('access_token'))
    return {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('access_token')}`
    };
  }

  // Post call with header API
  postWithHeader(url, json): Observable<any> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    //console.log('header post call', headers)
    return this.httpClient.post(this.apiURL + url, json, { headers: headers })
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

    // Post call with header API
    putWithHeader(url, json): Observable<any> {
      var headers = new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      });
      //console.log('header post call', headers)
      return this.httpClient.put(this.apiURL + url, json, { headers: headers })
        .pipe(
          catchError(this.errorHandler.bind(this))
        );
    }
  

  // Error Handle //
  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    const message = error[key];

    if (response.status === 400) {

      console.log('error code 400');
      this.toastr.error(message);
    }
    if (response.status === 401) {

      window.localStorage.clear();
      console.log('401 error');
    }
    if (response.status === 404) {

      console.log('404 error');
      this.route.navigate(['/error']);
    }
    if (response.status === 500) {

      console.log('500 error');
      this.toastr.error(message);
    }
  }

  // ---- Background Sound ---- //
  playAudio() {
    let audio = new Audio();
    audio.src = "assets/img/button-15.mp3";
    audio.load();
    audio.play();
  }

  changeLanguage(e) {
    var str = e;
    this.translate.setDefaultLang(str);
    window.localStorage.setItem('language',str)
  }
}
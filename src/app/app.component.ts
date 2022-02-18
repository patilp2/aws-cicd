import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { AccessTokenRepository } from './Repository/access-token.repository';
import { HeaderFooterRepository } from './Repository/header-footer.repository';
import jwt_decode from 'jwt-decode';
import { DatePipe } from '@angular/common';
import { timestamp } from 'rxjs/operators';
import { Observable, Subscription, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe],
})
export class AppComponent implements OnInit {
  //title = 'artnskills';
  public expiry;accessexpiry;
  headers;
  headerFooterdata;
  footerdata;
  jsonBody = {};
  public dataFlag = false;
  public dataFlags = false;

  // online offline
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];

  connectionStatusMessage: string;
  connectionStatus: string;
  
  constructor(
    public router: Router,
    private titleService: Title,
    private headerFooterRepository: HeaderFooterRepository,
    private accessTokenRepo: AccessTokenRepository,
    public datepipe: DatePipe,
  ) {
    titleService.setTitle('Art N Skills');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        //this.googleAnalyticsEventsService.emitPageview(event.urlAfterRedirects);
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.RefreshToken();

    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Back to online';
      this.connectionStatus = 'online';
      console.log('Online...');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
      this.connectionStatus = 'offline';
      console.log('Offline...');
    }));
  }
  // submitEvent() {
  //   this.googleAnalyticsEventsService.emitEvent("testCategory1", "testAction", "testLabel", 10);
  // }

  RefreshToken() {

    let refreshToken = localStorage.getItem('refresh_token');
    let accessToken = localStorage.getItem('access_token');

    if(refreshToken || accessToken){

      let jwt_refreshToken = jwt_decode(refreshToken);
      this.expiry = jwt_refreshToken['exp'] * 1000;
      let expirydate =this.datepipe.transform(this.expiry, 'yyyy-MM-dd');

      var todaysDate=new Date();
      let latest_date =this.datepipe.transform(todaysDate, 'yyyy-MM-dd');

      if(latest_date <= expirydate){

        let jwt_accessToken = jwt_decode(accessToken);
        this.accessexpiry = jwt_refreshToken['exp'] * 1000;
        let accessexpirydate =this.datepipe.transform(this.accessexpiry, 'yyyy-MM-dd');
        //let accessexpirydate = "2022-02-10";

        if(accessexpirydate <= latest_date){

          console.log("invalidate access token");

          this.jsonBody['refresh'] = refreshToken;
          let url = '/api-refresh-token/';
          const Jsonbody = this.jsonBody;
          console.log("Jsonbody",Jsonbody);

          const accessToken$ = this.accessTokenRepo.getAccessToken(url, Jsonbody)[0];
          accessToken$.subscribe((data) => {

            if (data === undefined || data === null) {
            } else {

              //console.log('access data Component',data);
              //window.localStorage.removeItem('access_token');

              window.localStorage.setItem(
                'access_token',
                data['data'].result.access
              );
            }
          });
        }
      }else{
        //console.log("else");
        this.router.navigate(['/login']);
      }
    }
  }

  headerFooterData() {
    let url = '/api/v2/pages/menu/';
    const headerFooterAllData$ =
      this.headerFooterRepository.getHeaderFooterList(url)[1];

    headerFooterAllData$.subscribe((data) => {
      this.headers = data;
      if (
        this.headers == 'undefined' ||
        this.headers == null ||
        this.headers.length == 0
      ) {
      } else {
        this.headerFooterdata = this.headers[0]['result']['header_items'];
        this.footerdata = this.headers[0]['result']['footer_items'];

        this.dataFlag = true;
        this.dataFlags = true;
      }
    });
  }



  checkLogin() {
    let access_token = localStorage.getItem('access_token');
    let refresh_token = localStorage.getItem('refresh_token');

    if (access_token && refresh_token) {
      this.router.navigate(['/project-upload']);
    } else {
      this.router.navigate(['/login']);
      window.localStorage.setItem('pageRedirectEvent', 'true');
      window.localStorage.setItem('EnquireFlag', 'false');

    }
  }



  ngOnDestroy(): void {
    /**
    * Unsubscribe all subscriptions to avoid memory leak
    */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

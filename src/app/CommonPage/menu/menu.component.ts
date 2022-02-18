import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public audio;
  languages;
  langSelect = '';
  access_token;
  tokenFlag = false;

  constructor(private commonService: CommonService) {
    if (
      window.localStorage.getItem('language') != undefined &&
      window.localStorage.getItem('language') != null
    ) {
      var set = window.localStorage.getItem('language');
      this.commonService.changeLanguage(set);
      if (set == 'en') {
        this.langSelect = 'en';
      } else {
        this.langSelect = 'hi';
      }
    } else if (
      window.localStorage.getItem('language') == undefined ||
      window.localStorage.getItem('language') == null
    ) {
      this.commonService.changeLanguage('en');
      this.langSelect = 'en';
    }
  }

  ngOnInit(): void {

    // this.access_token = localStorage.getItem('access_token');
    // console.log("Menu access token",this.access_token);
    // if (this.access_token) {
    //   this.tokenFlag = true;
    // } else {
    //   this.tokenFlag = false;
    // }


    this.languages = [
      {
        id: 1,
        value: 'hi',
      },
      {
        id: 2,
        value: 'en',
      },
    ];
  }

  playAudio() {
    this.commonService.playAudio();
  }

  langchange(e) {
    if (e.target.value == 'hi') {
      this.commonService.changeLanguage('hi');
    } else {
      this.commonService.changeLanguage('en');
    }
  }

  ngDoCheck() {
    this.access_token = localStorage.getItem('access_token');
    //console.log("Menu access token",this.access_token);
    if (this.access_token) {
      this.tokenFlag = true;
    } else {
      this.tokenFlag = false;
    }
  }

}

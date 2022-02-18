import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Home } from 'src/app/model/home';
import { HomeRepository } from 'src/app/Repository/home.repository';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dataFlag = false;
  dataFlags = false;
  dataFlagRecent = false;
  audio;loaderflag=false

  public spotlightdata = [];
  recentUploadData = [];
  homes;
  slider: [];spdata=[]

  constructor(
    private homeRepository: HomeRepository,
    private commonService: CommonService,
    private router: Router,
    private titleService: Title
  ) { 
    titleService.setTitle("Home");
  }


  ngOnInit(): void {
    this.homeData();
  }

  homeData() {
    this.loaderflag = true
    const homeAllData$ = this.homeRepository.getHomeList()[1];

    homeAllData$.subscribe((data) => {
      this.homes = data;
      if (
        this.homes == 'undefined' ||
        this.homes == null ||
        this.homes.length == 0
      ) {
      } else {
        this.spotlightdata = this.homes[0]['result']['spotlight_project'];
        this.recentUploadData = this.homes[0]['result']['recent_projects'];
        this.slider = this.homes[0]['result']['slider_images'];
        this.dataFlag = true;
        this.dataFlags = true;
        this.dataFlagRecent = true;

        this.spotlightdata.forEach(element => {
          console.log
          this.spdata.push(element['project'])
        });
        this.loaderflag=false
      }
    });

    

  }

  playAudio() {
    this.commonService.playAudio();
  }

 
}

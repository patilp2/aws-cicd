import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeRepository } from 'src/app/Repository/home.repository';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public dataFlag = false;
  dataFlags = false;
  dataFlagRecent = false;
  audio;

  public spotlightdata = [];
  recentUploadData = [];
  homes; spdata = []
  constructor(private homeRepository: HomeRepository,
    private commonService: CommonService,
    private router: Router,
    private titleService: Title) {
    titleService.setTitle("Explore Project");
  }

  ngOnInit(): void {
    this.homeData()
  }
  homeData() {
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
        this.dataFlag = true;
        this.dataFlags = true;
        this.dataFlagRecent = true;
        console.log('spotlight data', this.spotlightdata)

        this.spotlightdata.forEach(element => {
          console.log
          this.spdata.push(element['project'])
        });


      }
    });

  }


  atozsort() {
    let newdata = []
    newdata = this.spdata.sort(function (a, b) {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    })
    this.spdata = newdata
  }

  ztoasort() {
    let newdata = []
    newdata = this.spdata.sort(function (b, a) {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    })
    this.spdata = newdata
  } 

}

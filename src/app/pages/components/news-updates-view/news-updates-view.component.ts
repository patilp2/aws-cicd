import { Component, OnInit } from '@angular/core';
import { NewsandUpdateRepository } from 'src/app/Repository/NewsandUpdateRepository';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-updates-view',
  templateUrl: './news-updates-view.component.html',
  styleUrls: ['./news-updates-view.component.scss']
})
export class NewsUpdatesViewComponent implements OnInit {
  public newsData;

  constructor(private newsRepo: NewsandUpdateRepository,private titleService: Title) { 
    titleService.setTitle("News and Updates");
  }

  ngOnInit(): void {
    this.getNewsUpdate()
  }

  getNewsUpdate() {
    let url = "/api/v1/news-updates/"
    const NewsUpdateData$ = this.newsRepo.getNewsUpdate(url)[1];
    NewsUpdateData$.subscribe((data) => {
      if (data == undefined || data.length == 0 || data == null) {
      } else {
        this.newsData = data[0]['result']['results']
      }

    })
  }

}

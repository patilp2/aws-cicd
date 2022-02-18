import { Component, OnInit } from '@angular/core';
import { NewsandUpdateRepository } from 'src/app/Repository/NewsandUpdateRepository';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public newsData;

  constructor(private newsRepo: NewsandUpdateRepository) { }

  ngOnInit(): void {
    this.getNewsUpdate()
  }

  getNewsUpdate() {
    let url = "/api/v1/news-updates/"
    const NewsUpdateData$ = this.newsRepo.getNewsUpdate(url)[1];
    NewsUpdateData$.subscribe((data) => {
      console.log('News and update home section', data)
      if (data == undefined || data.length == 0 || data == null) {

      } else {
        this.newsData = data[0]['result']['results']
        console.log('NEws adata', this.newsData)
      }

    })
  }
}
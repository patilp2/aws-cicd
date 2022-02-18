import { Component, OnInit, TemplateRef } from '@angular/core';
import { $ } from 'protractor';
import { YoutubeService } from 'src/app/service/youtube.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {
  public videos;imageFlag=false;vid
  constructor(public youtubeService: YoutubeService) { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    this.getVideo()    
  }

  getVideo() {
    let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLZAx1SN-3BQ81xXX8IF_7_YBqrabsExs3&key=AIzaSyC1JXxluLLPpowvdV7y0UCU8pvYo9d-HDM"
    this.youtubeService.getPlaylistwiseData(url).subscribe(data => {
      console.log('get you-tube videos', data)
      this.videos = data['items']
      console.log('all videos data from talk home', this.videos)
    })
  }
  openModal(item) {
    console.log('itemmmmm', item)
  }
  playVideo(id){
    console.log('video id', id)
    this.imageFlag=true
    this.vid=id
  }
}

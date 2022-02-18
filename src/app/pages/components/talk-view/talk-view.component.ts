import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { YoutubeService } from 'src/app/service/youtube.service';
@Component({
  selector: 'app-talk-view',
  templateUrl: './talk-view.component.html',
  styleUrls: ['./talk-view.component.scss']
})
export class TalkViewComponent implements OnInit {

  public videos;videoFlag=false;imageFlag=false;vid
  constructor(public youtubeService: YoutubeService,private titleService: Title) {
    titleService.setTitle("ArtnSkills Talk");
   }

  ngOnInit(): void {  
    this.getVideo()
   
  }

  getVideo(){
    // this.youtubeService.getVideosForChanel('UCVGyFDo_j8JyFWzQuTO_mNw',3).subscribe(data=>{
    let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLZAx1SN-3BQ81xXX8IF_7_YBqrabsExs3&key=AIzaSyC1JXxluLLPpowvdV7y0UCU8pvYo9d-HDM";
    this.youtubeService.getPlaylistwiseData(url).subscribe(data=>{
      console.log('get you-tube videos ssd',data)
      this.videos=data['items']
      this.videoFlag =true
    })
  }

  getDuration(){
    this.youtubeService.getDuration().subscribe(res=>{
      console.log('heeeeeeee',res)
    })    
  }


  playVideo(id){
    console.log('video id', id)
    this.imageFlag=true
    this.vid=id
  }
}

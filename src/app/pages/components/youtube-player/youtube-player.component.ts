import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

let player;
declare var jQuery: any;


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {

  @Input() public receivedData;videodata
  @Output() public finishCall = new EventEmitter<Boolean>();
  constructor(private _eleRef: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnInit(){   
  this.videodata = this.receivedData['items']
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    console.log('hiiii youtube player data',this.videodata)
  }  

}
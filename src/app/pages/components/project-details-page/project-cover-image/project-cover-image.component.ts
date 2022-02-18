import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-cover-image',
  templateUrl: './project-cover-image.component.html',
  styleUrls: ['./project-cover-image.component.scss']
})
export class ProjectCoverImageComponent implements OnInit {
  // @Input() receivedData;
  @Input() title;
  @Input() loginFlag

  public ImgSrc;
  constructor() { }

  ngOnInit(): void {
  }

}

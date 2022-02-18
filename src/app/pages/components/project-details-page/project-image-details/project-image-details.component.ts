import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-image-details',
  templateUrl: './project-image-details.component.html',
  styleUrls: ['./project-image-details.component.scss']
})
export class ProjectImageDetailsComponent implements OnInit {
  //@Input() project_title;
  @Input() user_handle;
  constructor() { }

  ngOnInit(): void {
  }

}

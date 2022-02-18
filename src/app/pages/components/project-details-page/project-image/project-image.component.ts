import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styleUrls: ['./project-image.component.scss']
})
export class ProjectImageComponent implements OnInit {
  @Input() title;
  @Input() user_handle;
  @Input() passData;
  constructor() { }

  ngOnInit(): void {
  }
}

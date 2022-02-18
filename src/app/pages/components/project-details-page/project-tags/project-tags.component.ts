import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss']
})
export class ProjectTagsComponent implements OnInit {
  @Input() public tagsData;
  constructor() { }

  ngOnInit(): void {
    console.log("tags", this.tagsData);
  }

}

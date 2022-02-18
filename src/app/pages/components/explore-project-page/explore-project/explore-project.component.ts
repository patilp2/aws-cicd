import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-explore-project',
  templateUrl: './explore-project.component.html',
  styleUrls: ['./explore-project.component.scss']
})
export class ExploreProjectComponent implements OnInit {
 
  constructor(private titleService: Title) {
    titleService.setTitle("Explore Project");
  }

  ngOnInit(): void {
  }
}

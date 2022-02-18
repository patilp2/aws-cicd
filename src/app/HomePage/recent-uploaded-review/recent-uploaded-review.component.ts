import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-uploaded-review',
  templateUrl: './recent-uploaded-review.component.html',
  styleUrls: ['./recent-uploaded-review.component.scss']
})
export class RecentUploadedReviewComponent implements OnInit {
  @Input() public passrating;
  @Input() public passlike;

  constructor() { }

  ngOnInit(): void {

  }

}

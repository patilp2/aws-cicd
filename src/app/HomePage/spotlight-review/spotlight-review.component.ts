import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotlight-review',
  templateUrl: './spotlight-review.component.html',
  styleUrls: ['./spotlight-review.component.scss']
})
export class SpotlightReviewComponent implements OnInit {
  @Input() public passrating;
  @Input() public passlike;

  constructor() { }

  ngOnInit(): void {
  }

}

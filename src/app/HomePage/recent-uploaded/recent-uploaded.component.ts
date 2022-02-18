import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-uploaded',
  templateUrl: './recent-uploaded.component.html',
  styleUrls: ['./recent-uploaded.component.scss'],
})
export class RecentUploadedComponent implements OnInit {
  @Input() public recentUpload;
  passRating;
  passLike;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  projectDetails(url) {
    let redirectUrl = url.toString().split("/");
    let finalUrl = redirectUrl[3];
    this.router.navigate(['/project-details/' + finalUrl, { params: url }]);
  }

}

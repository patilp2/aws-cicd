import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {
  @Input() public recevieData; passrating; passlike;
  sortedArray = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  // project card click redirect to details page
  projectDetails(url) {
    let redirectUrl = url.toString().split("/");
    let finalUrl = redirectUrl[4];
    this.router.navigate(['/project-details/' + finalUrl, { params: url }]);
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public access_token;refresh_token

  constructor(private router:Router) { }


  ngOnInit(): void {
    this.access_token = localStorage.getItem('access_token');
    this.refresh_token = localStorage.getItem('refresh_token');
  }

  checkLogin() {
    if (this.access_token && this.refresh_token) {
      this.router.navigate(['/message']);
    } else {
      this.router.navigate(['/login']);
      window.localStorage.setItem('EnquireFlag', 'true');
      window.localStorage.setItem('pageRedirectEvent', 'false');
    }
  }

  download(){
    if (this.access_token && this.refresh_token) {

    } else {
      this.router.navigate(['/login']);
      window.localStorage.setItem('EnquireFlag', 'false');
      window.localStorage.setItem('pageRedirectEvent', 'false');
      window.localStorage.setItem('downloadProject', 'true');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) {
    titleService.setTitle('Login');
  }

  ngOnInit(): void {}
  checkLogin() {
    let access_token = localStorage.getItem('access_token');
    let refresh_token = localStorage.getItem('refresh_token');

    if (access_token && refresh_token) {
      this.router.navigate(['/project-upload']);
    } else {
      this.router.navigate(['/login']);
      window.localStorage.setItem('pageRedirectEvent', 'true');
    }
  }
}

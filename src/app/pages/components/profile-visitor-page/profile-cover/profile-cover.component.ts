import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.scss']
})
export class ProfileCoverComponent implements OnInit {

  @Input() public user_handle;
  @Input() public first_name;
  @Input() public last_name;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss'],
})
export class ProjectProfileComponent implements OnInit {
  @Input() public cover_description;
  @Input() public college_name;
  @Input() public profile_pic;
  @Input() public linked_in_handle;
  @Input() public insta_handle;
  @Input() public ug_pg;
  @Input() public university;
  @Input() public follower_count;

  @Input() public profileData;
  
  public userHandle;
  Uploaded;
  profilePage = false;
  constructor() {}

  ngOnInit(): void {
    console.log('profile / project data 1', this.college_name);
    this.userHandle = this.profileData[0]['result'].user_handle;
    this.Uploaded = this.profileData[0]['result'].last_published_at;
  }
}

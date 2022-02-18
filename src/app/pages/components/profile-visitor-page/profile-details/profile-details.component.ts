import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Profile } from 'src/app/model/profile';
import { ProfileRepository } from 'src/app/Repository/profile.repository';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private profileRepository: ProfileRepository) {}
  profile: Profile[] = [];
  public user_id;
  profiles;
  username;
  badges;
  college_name;
  first_name;
  middle_name;
  last_name;
  cover_pic;
  user_handle;
  profile_pic;
  linked_in_handle;
  insta_handle;
  ug_pg;
  ug_pg_year;
  university;
  cover_description;
  follower_count;
  dataFlag = false;
  
  ngOnInit(): void {
    this.profileDetails();
  }

  profileDetails() {
    let jwt_token = jwt_decode(localStorage.getItem('access_token'));
    this.user_id = jwt_token['aud_'];

    let url = '/api/v1/profile/' + this.user_id + '/';

    const profileData$ = this.profileRepository.getProfileDetails(url)[1];

    profileData$.subscribe((data) => {
      this.profiles = data;

      if (
        this.profiles == 'undefined' ||
        this.profiles == null ||
        this.profiles.length == 0
      ) {
      } else {
        console.log('Profile Information Component', this.profiles);
        this.username = this.profiles[0].result.user.username;
        this.badges = this.profiles[0].result.badges;
        this.college_name = this.profiles[0].result.college_name;
        this.first_name = this.profiles[0].result.user.first_name;
        this.middle_name = this.profiles[0].result.user.middle_name;
        this.last_name = this.profiles[0].result.user.last_name;
        this.profile_pic = this.profiles[0].result.profile_pic;
        this.cover_description = this.profiles[0].result.cover_description;
        this.cover_pic = this.profiles[0].result.cover_pic;
        this.user_handle = this.profiles[0].result.user_handle;
        this.university = this.profiles[0].result.university;
        this.ug_pg = this.profiles[0].result.ug_pg;
        this.ug_pg_year = this.profiles[0].result.ug_pg_year;
        this.insta_handle = this.profiles[0].result.insta_handle;
        this.linked_in_handle = this.profiles[0].result.linked_in_handle;
        this.ug_pg_year = this.profiles[0].result.ug_pg_year;
        this.follower_count = this.profiles[0].result.follower_count;

        //this.dataFlag = true;
        //console.log('user_handle', this.university);

      }
    });
  }

}

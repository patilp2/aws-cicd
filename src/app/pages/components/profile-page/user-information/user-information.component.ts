import { Component, OnInit } from '@angular/core';
import { ProfileRepository } from 'src/app/Repository/profile.repository';
import { Profile } from 'src/app/model/profile'
import jwt_decode from 'jwt-decode';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  profile: Profile[] = [];
  public user_profile_id; username; first_name; middle_name; last_name; gender;
  profiles; user_id;


  // image crpper
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private profileRepository: ProfileRepository) { }

  ngOnInit(): void {
    this.profileData();
  }

  // image cropper

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  profileData() {

    let jwt_token = jwt_decode(localStorage.getItem('access_token'));
    this.user_id = jwt_token['aud_'];

    let url = '/api/v1/profile/' + this.user_id + '/';

    const profileData$ = this.profileRepository.getProfileDetails(url)[1];

    profileData$.subscribe(data => {
      this.profiles = data;
      console.log('User Information Component', this.profiles);

      if (this.profiles == 'undefined' || this.profiles == null || this.profiles.length == 0) {

      } else {
        this.user_profile_id = this.profiles[0].result.user_profile_id;
        this.username = this.profiles[0].result.user.username;
        this.first_name = this.profiles[0].result.user.first_name;
        this.middle_name = this.profiles[0].result.user.middle_name;
        this.last_name = this.profiles[0].result.user.last_name;

        console.log('Username', this.username);
      }

    });
  }

  profileUpdate() {

    let jwt_token = jwt_decode(localStorage.getItem('access_token'));
    this.user_id = jwt_token['aud_']

    let url = "/api/v1/profile/" + this.user_id + "/";
    let jsonbody = {}

    jsonbody['user'] = { "first_name": this.first_name, "middle_name": this.middle_name, "last_name": this.last_name };
    jsonbody['user_profile_id'] = this.user_profile_id;

    const jsonBody = jsonbody;
    console.log('Profile Update Component, Jsonbody', jsonBody);

    const profileUpdate$ = this.profileRepository.profileUpdate(url, jsonBody)[0];

    profileUpdate$.subscribe(data => {
      console.log("Profile Update Response", data);
      this.profileData();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserRoleRepository } from 'src/app/Repository/user-role.repository';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role-selection',
  templateUrl: './user-role-selection.component.html',
  styleUrls: ['./user-role-selection.component.scss']
})
export class UserRoleSelectionComponent implements OnInit {

  constructor(private router: Router,private userRoleRepository: UserRoleRepository,private toastr: ToastrService,) { }

  public type;  
  jsonBody = {};
  user_id;
  backFlags;


  ngOnInit(): void {

    console.log("check back user role",window.localStorage.getItem('backFlags'));
    if(window.localStorage.getItem('backFlags') === 'true'){
      this.router.navigate(['/']);
      console.log("user role submit",true);

    }
  }


  userRole(){

    this.jsonBody['type'] = this.type;
    const Jsonbody = this.jsonBody;
    console.log('User Role Component', Jsonbody);

    let access_token = localStorage.getItem('access_token');
    // console.log('User Role Component',access_token);
     
    if(access_token){

      let jwt_token = jwt_decode(localStorage.getItem('access_token'));
      this.user_id = jwt_token['aud_'];
      let url = "/auth/role/" +this.user_id + "/";

      const UserRole$ = this.userRoleRepository.userRole(url, Jsonbody)[0];
      UserRole$.subscribe(
        (data) => {

        if (data === undefined || data === null) {
          //console.log('Login data Component');
        } else {

          this.toastr.success('User Role Select Successfully!');
          console.log('User Role Component', data);
          this.router.navigate(['/profile-details']);
          window.localStorage.setItem('backFlags', 'true');
          console.log("check true");

        }
      },
      (error) => {
          console.log('login error record', error.error);
          this.toastr.error(error.error);
        }
      );

    }else{
      this.toastr.error('User not login!');

    }

      
  }

}

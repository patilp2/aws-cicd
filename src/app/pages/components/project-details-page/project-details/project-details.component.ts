import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ProjectDetailsrepository } from 'src/app/Repository/project-details.repository';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  public passData;
  passTagsData;
  passLike;
  passJuryRating;
  title;
  user_handle;
  public dataFlag = false;
  parameters;isloggedInflag

  constructor(
    private store: Store,
    private projectDetailsRepository: ProjectDetailsrepository,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    titleService.setTitle("Project Details");
  }



  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe((params) => {
      this.parameters = params.get('params');
    });

    let url = this.parameters;
    this.projectData(url);

    let access_token = localStorage.getItem('access_token');
    let refresh_token = localStorage.getItem('refresh_token');

    if (access_token && refresh_token) {
      this.isloggedInflag =true
    } else {
      this.isloggedInflag =false

    }
  }

  projectData(url) {
    const projectdetailsAllData$ =
      this.projectDetailsRepository.getprojectdetails(url)[1];

    projectdetailsAllData$.subscribe(
      (data) => {
        if (data == undefined || data == null || data.length == 0) {
        } else {
          this.passData = data;
          console.log('prject details data', this.passData[0]);
          this.passTagsData = this.passData[0]['result'].project_tag;
          this.passLike = this.passData[0]['result'].like_count;
          this.passJuryRating = this.passData[0]['result'].jury_rating_avg;
          this.title = this.passData[0]['result'].title;
          this.user_handle = this.passData[0]['result'].user_handle;
          this.dataFlag = true;
        }
      },
      (error) => {
        console.log('hello 404 Error', error.error);
      }
    );
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { LikeRepository } from 'src/app/Repository/LikeRepository';

@Component({
  selector: 'app-project-review',
  templateUrl: './project-review.component.html',
  styleUrls: ['./project-review.component.scss']
})
export class ProjectReviewComponent implements OnInit {

  public like; likeflag; likeCount
  constructor(private likeRepo: LikeRepository) { }



  ngOnInit(): void {
    // this.getlike();
  }

  getlike() {
    let url = "/api/v1/likes/count/";
    const likedata$ = this.likeRepo.getLike(url)[1];
    likedata$.subscribe(data => {

      if (data == null || data == undefined || data.length == 0) {
        console.log('hiii')
      } else {
        this.likeCount = data[0]['result'].count
        console.log('like count data', this.likeCount);
      }
    })

  }

  liketoggle() {
    let url = "/api/v1/likes/toggle/"
    let jsonbody = {}
    jsonbody['id'] = "3"
    jsonbody['type'] = "projects.Project"
    console.log('like click true', jsonbody);

    const postlikedata$ = this.likeRepo.postLike(url, jsonbody)[0];
    postlikedata$.subscribe(data => {
      console.log('post like component data', data)
      if (data == null || data == undefined) {
        console.log('post like faild')
      } else {
        console.log('post like success')
      }
    })

  }


}

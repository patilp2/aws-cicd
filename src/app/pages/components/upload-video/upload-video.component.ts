import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Subscription } from 'rxjs';
import { YoutubeService } from 'src/app/service/youtube.service';
@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {

  file: File;
  videoSelected = false;
  loading = false;
  isUploaded=false
  @ViewChild('videoFile') nativeInputFile: ElementRef;
  @ViewChild('video') video: any;
  public uploadFromdisk; uploadFromYoutube; SelectVideo = false;
  public formData = new FormData()
  videoForm: FormGroup;
  percentageUpload = 0;
  subscription: Subscription;
  videoUrl: string;
  privacy: string;
  videoStatus;description; vtitle

  constructor(public youtubeService: YoutubeService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
  }

  // Select video and detect browser

  selectVideo(data) {
    this.videoSelected = true;
    if (navigator.userAgent.search('firefox')) {
      this.file = data.target.files[0];
    } else {
      this.file = data.srcElement.files[0];
    }
    this.video.nativeElement.src = window.URL.createObjectURL(this.file);
  }

  // change video click

  pickFile() {
    this.nativeInputFile.nativeElement.click();
  }

  // youtube uplload click

  youtubeSubmit() {
    this.uploadFromdisk = this.file;
    console.log('upload disk file', this.uploadFromdisk)
    this.SelectVideo = true
  }


  // upload on youtube

  onSubmit(item) {
    this.formData.append('',this.uploadFromdisk)

    this.loading = true;
    this.subscription = this.youtubeService
      .postVideosForChanel(this.formData,item).subscribe((data) => {
        if (data.type === HttpEventType.UploadProgress) {
          this.percentageUpload = Math.round(100 * data.loaded / data.total);
        } else if (data instanceof HttpResponse) {
          const response: any = data.body;
          this.videoUrl = 'https://www.youtube.com/watch?v=' + response.id;
          this.loading = false;
          this.toastr.success('video is uploaded to youtube successfully');
        }
      }, (error => {
        this.loading = false;
        if (error instanceof Error) {
          console.log('Error', error.message);
        } else {
          const errorObject = JSON.parse(error.error);
          if (errorObject.error.errors[0].reason === 'youtubeSignupRequired') {
            this.toastr.error(errorObject.error.message)
          } else {
            this.toastr.error(errorObject.error.message);
          }
        }
      }));
  }

  // Cancle click

  onCancel() {
    this.subscription.unsubscribe();
    this.loading = false;
  }

 

}

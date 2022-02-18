import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentRepository } from 'src/app/Repository/comment.repository';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() commentData;
  public jsonBody = {};
  public comment; getComment; model_id; model_name; app_name

  constructor(private commentRepository: CommentRepository) { }

  ngOnInit(): void {
  }

  addComment() {
    this.getComment = this.commentData[0]['result'].meta.type
    this.model_id = this.commentData[0]['result'].id
    this.model_name = this.getComment.split(".")[1]
    this.app_name = this.getComment.split(".")[0]

    let url = "/api/comments/create/";
    this.jsonBody['model_name'] = this.model_name;
    this.jsonBody['model_id'] = this.model_id;
    this.jsonBody['app_name'] = this.app_name;
    this.jsonBody['parent_id'] = 0;
    this.jsonBody['content'] = this.comment;

    const Jsonbody = this.jsonBody;
    console.log('Comment component, Jsonbody', Jsonbody);

    const Comment$ = this.commentRepository.postComment(url, Jsonbody)[0];
    Comment$.subscribe(data => {

      console.log('Comment Component', data);
      // if (data == undefined || data == null) {
      //   console.log('errorrrrrrrr')
      // } else {
      //     if (data['data'].detail != undefined || data['data'].detail != null ) {

      //     } else {
      //       console.log('helloooooo')
      //     } 
      // }
    }, error => {
      console.log('login error record', error.error);

    });

  }

}

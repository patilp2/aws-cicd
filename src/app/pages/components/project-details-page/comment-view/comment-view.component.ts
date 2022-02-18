import { Component, Input, OnInit, Output } from '@angular/core';
import { CommentRepository } from '../../../../Repository/comment.repository';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {
  @Input() commentData;
  @Input() commentlist;
  public getComment; model_name; model_id; app_name;
  constructor(private getCommentService: CommentRepository) { }

  ngOnInit(): void {

    this.getComment = this.commentData[0]['result'].meta.type;
    this.model_id = this.commentData[0]['result'].id;
    this.model_name = this.getComment.split(".")[1];
    this.app_name = this.getComment.split(".")[0];

    let url = "/api/comments/?app_name=" + this.app_name + "&model_id=" + this.model_id + "&model_name=" + this.model_name + ""
    const getCommnetAllData$ = this.getCommentService.getComment(url)[1];

    getCommnetAllData$.subscribe(data => {
      if (data === undefined || data.length === 0) {
      } else {
        if (data[0]['count'] === 0) {
        } else {
          this.commentlist = data[0]['result'];
          console.log("comment view", this.commentlist)
        }
      }
    })
  }


  next() {
    console.log('next url', this.commentlist.next)
    const nextUrl$ = this.getCommentService.getComment(this.commentlist.next)[1];
    nextUrl$.subscribe(data => {
      console.log('Next api url call data', data)
      this.commentlist = data[0]
      console.log('next comment list', this.commentlist)
    })
  }

  deleteComment(id) {
    let url = "/api/comments/" + id + "/";
    console.log("Delete Comment", id + "url", url);
    const deleteComment$ = this.getCommentService.deleteComment(url)[0];
    deleteComment$.subscribe(data => {
      console.log('delete data', data);

    })
  }

}
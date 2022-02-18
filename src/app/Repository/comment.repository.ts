import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { CommentDetails } from '../model/comment';
import { getcomment, getcommentLoaded, getcommentLoading, postComment, RootReducerState } from '../store/reducer';
import * as CommentActions from '../store/action/comment.actions';


@Injectable({
    providedIn: 'root'
})

export class CommentRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }

    getComment(url): [Observable<boolean>, Observable<CommentDetails[]>] {
        const loading$ = this.store.select(getcommentLoading);
        const loaded$ = this.store.select(getcommentLoaded);
        const getCommentData = this.store.select(getcomment);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {
                this.store.dispatch(new CommentActions.LoadCommentAction());

                this.apiService.getComment(url).subscribe(res => {
                    this.store.dispatch(new CommentActions.CommentSuccessAction({ data: res }));

                });
            }
        });

        return [loaded$, getCommentData];
    }

    postComment(url, Jsonbody): [Observable<CommentDetails>] {

        const postCommentData = this.store.select(postComment);

        this.store.dispatch(new CommentActions.AddCommentAction());

        this.apiService.postComment(url, Jsonbody).subscribe(res => {
            this.store.dispatch(new CommentActions.AddCommentAction({ data: res }));

        });

        return [postCommentData];

    }

    deleteComment(url): [Observable<CommentDetails>] {

        const getCommentData = this.store.select(postComment);

        //this.store.dispatch(new CommentActions.LoadCommentAction());

        this.apiService.deleteComment(url).subscribe(res => {
            this.store.dispatch(new CommentActions.DeleteCommentAction({ data: res }));

        });

        return [getCommentData];

    }
}   
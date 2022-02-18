import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { countdetails, likepost } from '../model/like';
import { getLike, getLikeLoaded, getLikeLoading, postLike, RootReducerState } from '../store/reducer';
import * as LikeActions from '../store/action/like.actions';

@Injectable({
    providedIn: 'root'
})


export class LikeRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }


    getLike(url): [Observable<boolean>, Observable<countdetails[]>] {
        const loading$ = this.store.select(getLikeLoading);
        const loaded$ = this.store.select(getLikeLoaded);
        const getLikeData = this.store.select(getLike);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new LikeActions.LikeAction());

                this.apiService.getLike(url).subscribe(res => {
                    this.store.dispatch(new LikeActions.LikeSuccessAction({ data: res }));
                });
            }
        });

        return [loaded$, getLikeData];
    }


    postLike(url, json): [Observable<boolean>, Observable<likepost[]>] {
        const loading$ = this.store.select(getLikeLoading);
        const loaded$ = this.store.select(getLikeLoaded);
        const getPostData = this.store.select(postLike);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new LikeActions.LikeAction());

                this.apiService.postlike(url, json).subscribe(res => {
                    console.log("45685", res);

                    this.store.dispatch(new LikeActions.LikePostSuccessAction({ data: res }));
                });
            }
        });

        return [loaded$, getPostData];
    }
}

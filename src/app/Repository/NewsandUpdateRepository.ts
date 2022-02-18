import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { getNewsUpdateindex, getNewsUpdateLoaded, getNewsUpdateLoading, RootReducerState } from '../store/reducer';
import { newsUpdatedata } from '../model/news-updates';
import * as NewsUpdateActions from 'src/app/store/action/news-updates.actions'

@Injectable({
    providedIn: 'root'
})

export class NewsandUpdateRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }

    getNewsUpdate  (url): [Observable<boolean>, Observable<newsUpdatedata[]>] {

        const loading$ = this.store.select(getNewsUpdateLoading);
        const loaded$ = this.store.select(getNewsUpdateLoaded);
        const getMessagedata = this.store.select(getNewsUpdateindex);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new NewsUpdateActions.LoadNewsUpate());

                this.apiService.getNewsupdate(url).subscribe(res => {
                    this.store.dispatch(new NewsUpdateActions.LoadNewsUpateSuccess({ data: res }));
                }, error => {
                });
            }
        });

        return [loaded$, getMessagedata];

    }
}



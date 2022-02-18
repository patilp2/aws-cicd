import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { Home } from '../model/home';
import { ApiService } from '../service/api.service';
import { getHomeLoaded, getHomeLoading, getHomes, RootReducerState } from '../store/reducer';
import * as HomesActions from 'src/app/store/action/home.actions';


@Injectable({
    providedIn: 'root'
})

export class HomeRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }

    getHomeList(force = false): [Observable<boolean>, Observable<Home[]>] {

        const loading$ = this.store.select(getHomeLoading);
        const loaded$ = this.store.select(getHomeLoaded);
        const getHomesData = this.store.select(getHomes);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1]) || force) {

                this.store.dispatch(new HomesActions.LoadHomes());

                this.apiService.getHome().subscribe(res => {
                    this.store.dispatch(new HomesActions.LoadHomesSuccess({ data: res }));

                }, error => {
                    console.log('error homlist repo', error.error.message)
                });
            }
        });

        return [loaded$, getHomesData];

    }

}



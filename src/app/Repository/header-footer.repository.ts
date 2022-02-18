import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { HeaderFooter } from '../model/header-footer';
import { ApiService } from '../service/api.service';
import { getHeaderFooter, getHeaderFooterLoaded, getHeaderFooterLoading, RootReducerState } from '../store/reducer';
import * as HeaderFooterActions from 'src/app/store/action/header-footer.actions';


@Injectable({
    providedIn: 'root'
})

export class HeaderFooterRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }

    
    getHeaderFooterList(url,force = false): [Observable<boolean>, Observable<HeaderFooter[]>] {

        const loading$ = this.store.select(getHeaderFooterLoading);
        const loaded$ = this.store.select(getHeaderFooterLoaded);
        const getHeaderFoterData = this.store.select(getHeaderFooter);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1]) || force) {

                this.store.dispatch(new HeaderFooterActions.LoadHeaderFooters());

                this.apiService.getHeaderFooter(url).subscribe(res => {
                    this.store.dispatch(new HeaderFooterActions.LoadHeaderFootersSuccess({ data: res }));

                }, error => {
                    console.log('Header Footer', error.error.message)
                });
            }
        });

        return [loaded$, getHeaderFoterData];

    }

}
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { ProjectDetails } from '../model/project-details';
import { ApiService } from '../service/api.service';
import { LoadProjectdetailsDataAction, LoadProjectdetailsDataSuccessAction } from '../store/action/project-details.actions';
import { getprojectDetailsLoaded, getprojectDetailsLoading, getprojectDetails, RootReducerState } from '../store/reducer';


@Injectable({
    providedIn: 'root'
})

export class ProjectDetailsrepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }

    getprojectdetails(url, force = false): [Observable<boolean>, Observable<ProjectDetails[]>] {

        const loading$ = this.store.select(getprojectDetailsLoading);
        const loaded$ = this.store.select(getprojectDetailsLoaded);
        const getprojectDetailsdata = this.store.select(getprojectDetails);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1]) || force) {

                this.store.dispatch(new LoadProjectdetailsDataAction());

                this.apiService.getProjetDetails(url).subscribe(res => {
                    this.store.dispatch(new LoadProjectdetailsDataSuccessAction({ data: res }));
                });
            }
        });

        return [loaded$, getprojectDetailsdata];

    }

}
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { Profile } from 'src/app/model/profile';
import { getProfile, getProfileLoaded, getProfileLoading, profileUpdate, RootReducerState } from '../store/reducer';
import * as ProfileActions from 'src/app/store/action/profile.actions';



@Injectable({
    providedIn: 'root'
})

export class ProfileRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }


    getProfileDetails(url): [Observable<boolean>, Observable<Profile[]>] {

        const loading$ = this.store.select(getProfileLoading);
        const loaded$ = this.store.select(getProfileLoaded);
        const getProfileDetails = this.store.select(getProfile);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new ProfileActions.LoadProfiles());

                this.apiService.getProfile(url).subscribe(res => {
                    this.store.dispatch(new ProfileActions.LoadProfilesSuccess({ data: res }));

                });
            }
        });

        return [loaded$, getProfileDetails];

    }

    profileUpdate(url, jsonBody): [Observable<Profile>] {

        const profileUpdateData = this.store.select(profileUpdate);

        //this.store.dispatch(new ProfileActions.ProfilesUpdate());

        this.apiService.profileUpdate(url, jsonBody).subscribe(res => {
            this.store.dispatch(new ProfileActions.ProfilesUpdate({ data: res }));

        });

        return [profileUpdateData];


    }



}
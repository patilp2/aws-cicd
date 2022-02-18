import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccessToken } from '../model/access-token';
import { getAccessToken, RootReducerState } from '../store/reducer';
import * as AccessTokenActions from 'src/app/store/action/access-token.actions';
import { ApiService } from '../service/api.service';


@Injectable({
    providedIn: 'root'
})

export class AccessTokenRepository {
    

    constructor(private store: Store<RootReducerState> ,private apiService: ApiService) { }


    getAccessToken(url, Jsonbody): [Observable<AccessToken>] {
       
        const AccessToken$ = this.store.select(getAccessToken);

        this.store.dispatch(new AccessTokenActions.LoadAccessTokensSuccess());
        
        this.apiService.postAccessToken(url, Jsonbody).subscribe(res => {  
            this.store.dispatch(new AccessTokenActions.LoadAccessTokensSuccess( {data : res} ));
        });

        return [AccessToken$];

    }

    
}   
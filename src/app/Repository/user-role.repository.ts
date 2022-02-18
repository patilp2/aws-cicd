import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { getUserRole, RootReducerState } from '../store/reducer';
import { UserRole } from '../model/user-role';
import * as UserRoleActions from 'src/app/store/action/user-role.actions';


@Injectable({
    providedIn: 'root'
})

export class UserRoleRepository {
    

    constructor(private store: Store<RootReducerState>, private authService: AuthService) { }


    userRole(url, Jsonbody): [Observable<UserRole>] {
       
        const userRoleData$ = this.store.select(getUserRole);

        this.store.dispatch(new UserRoleActions.LoadUserRolesSuccess());
        
        this.authService.postUserRole(url, Jsonbody).subscribe(res => {  
            this.store.dispatch(new UserRoleActions.LoadUserRolesSuccess( {data : res} ));
        });

        return [userRoleData$];

    }



    
}   
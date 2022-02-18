import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { MessageDetails, messagethread, resultdetails } from '../model/message';
import { ApiService } from '../service/api.service';
import { postMessage, getMessageLoaded, getMessageLoading, RootReducerState, getMessageInbox, getMessageThread } from '../store/reducer';
import * as MessageActions from '../store/action/message.actions'

@Injectable({
    providedIn: 'root'
})

export class MessageRepository {

    constructor(private store: Store<RootReducerState>, private apiService: ApiService) { }

    getMessageInbox(url): [Observable<boolean>, Observable<resultdetails[]>] {

        const loading$ = this.store.select(getMessageLoading);
        const loaded$ = this.store.select(getMessageLoaded);
        const getMessagedata = this.store.select(getMessageInbox);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new MessageActions.LoadMessageInbox());

                this.apiService.getMessage(url).subscribe(res => {
                    this.store.dispatch(new MessageActions.LoadMessageInboxSuccess({ data: res }));

                }, error => {
                    console.log('error get Message Inbox repo', error.error.message)
                });
            }
        });

        return [loaded$, getMessagedata];

    }

    postmessage(url, json): [Observable<boolean>, Observable<MessageDetails[]>] {

        const loading$ = this.store.select(getMessageLoading);
        const loaded$ = this.store.select(getMessageLoaded);
        const postMessageData$ = this.store.select(postMessage);


        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new MessageActions.LoadMessage({ data }));

                this.apiService.postMessage(url, json).subscribe(res => {
                    this.store.dispatch(new MessageActions.LoadMessageSuccess({ data: res }));
                });
            }
        });

        return [loaded$, postMessageData$];

    }
    getMessageThread(url): [Observable<boolean>, Observable<messagethread[]>] {

        const loading$ = this.store.select(getMessageLoading);
        const loaded$ = this.store.select(getMessageLoaded);
        const getMessageThreadata = this.store.select(getMessageThread);

        combineLatest([loaded$, loading$]).subscribe((data) => {

            if ((!data[0] && !data[1])) {

                this.store.dispatch(new MessageActions.LoadMessageThread());

                this.apiService.getMessageThread(url).subscribe(res => {
                    console.log('get message thread repo data', res)
                    this.store.dispatch(new MessageActions.LoadMessageThreadSuccess({ data: res }));

                }, error => {
                    console.log('error get Message thread', error.error.message)
                });
            }
        });

        return [loaded$, getMessageThreadata];

    }



}

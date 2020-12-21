import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';

import {Store} from '@ngrx/store'

import {ShareModule} from '../../shared.module';
import * as fromStore from '../../../store';
import { filter, take, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: ShareModule
})
export class RequireUnauthGuard implements CanActivate {
    
    constructor (private store: Store<fromStore.State>) {}

    canActivate(){
        return this.store.select(fromStore.getIsAuthenticated)
            .pipe(
                filter(isAuthenticated => isAuthenticated !== undefined),
                take(1),
                tap(isAuthenticated => {
                    if (isAuthenticated) {
                        this.store.dispatch(new fromStore.Go({
                            path: ['/todos']
                        }));
                    }
                }),
                map(isAuthenticated => !isAuthenticated)
            );
    }

}

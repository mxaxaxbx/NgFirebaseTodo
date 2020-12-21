import {Injectable}from '@angular/core';
import {Router}from '@angular/router';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import * as authAction from '../actions/auth.action';
import * as fromServices from '../../shared/services';
import * as fromRouter from '../actions/router.action';

@Injectable()
export class AuthEffect {

    constructor (
        private action$: Actions,
        private router: Router,
        private authService: fromServices.AuthService
    ) {}

    @Effect()
    signInUserAnonymously$ = this.action$
        .pipe(
            ofType(authAction.SIGN_IN_USER_ANONYMOUSLY),
            switchMap(() => {
                return this.authService
                    .signInAnonymously()
                    .pipe(
                        map(payload => new authAction.SignInUserAnonymouslySuccess(payload))
                    );
            })
        );

    @Effect()
    signInUserAnonymouslySuccess$ = this.action$
        .pipe(
            ofType(authAction.SIGN_IN_USER_ANONYMOUSLY_SUCCESS),
            map(() => new fromRouter.Go({path: ['/todos']}))
        );

    @Effect()
    signOutUser$ = this.action$
        .pipe(
            ofType(authAction.SIGN_OUT_USER),
            map(() => new fromRouter.Go({path: ['/auth']}))
        );

}

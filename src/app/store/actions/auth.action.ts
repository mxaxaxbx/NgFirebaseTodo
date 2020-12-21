import {Action} from '@ngrx/store';

export const SIGN_IN_USER_ANONYMOUSLY = '[Auth] Sign In User Anonymously';
export const SIGN_IN_USER_ANONYMOUSLY_SUCCESS = '[Auth] Sign In User Anonymously Success';

export class SignInUserAnonymously implements Action {
    readonly type = SIGN_IN_USER_ANONYMOUSLY;
}

export class SignInUserAnonymouslySuccess implements Action {
    readonly type = SIGN_IN_USER_ANONYMOUSLY_SUCCESS;
    constructor(public payload: any) {}
}

export const SIGN_OUT_USER = '[Auth] Sign Out User';

export class SignOutUser implements Action {
    readonly type = SIGN_OUT_USER;
}

export type AuthAction = 
    | SignInUserAnonymously
    | SignInUserAnonymouslySuccess
    | SignOutUser;

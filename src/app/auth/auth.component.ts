import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
  }

  signInAnonymously() {
    this.store.dispatch(new fromStore.SignInUserAnonymously());
  }

}

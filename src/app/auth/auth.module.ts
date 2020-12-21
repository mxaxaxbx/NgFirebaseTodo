import { NgModule } from '@angular/core';

import {AuthRoutingModule} from './auth-routing.module';
import {ShareModule} from '../shared/shared.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ShareModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

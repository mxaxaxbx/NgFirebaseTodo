import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {TodosRoutingModule} from './todos-routing.module';
import {TodoSharedModule} from './shared/shared.module';

// Components
import {TodosComponent} from './todos.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// Interceptors
import {AuthInterceptor} from '../shared/interceptors/auth/auth.interceptors';
import {HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    TodoSharedModule,
    TodosRoutingModule,
    StoreModule.forFeature('todoManager', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class TodosModule { }

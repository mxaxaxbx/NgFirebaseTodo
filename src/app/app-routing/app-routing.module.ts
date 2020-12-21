import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {RequireAuthGuard} from '../shared/guards/require-auth/require-auth.guards';
import {RequireUnauthGuard} from '../shared/guards/require-unauth/require-unauth.guard';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(mod => mod.AuthModule),
    canActivate: [RequireUnauthGuard]
  },
  {
    path: 'todos',
    loadChildren: () => import('../todos/todos.module').then(mod => mod.TodosModule),
    canActivate: [RequireAuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

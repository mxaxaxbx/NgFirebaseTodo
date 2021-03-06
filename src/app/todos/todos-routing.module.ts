import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodosComponent} from './todos.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TodosComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class TodosRoutingModule {}

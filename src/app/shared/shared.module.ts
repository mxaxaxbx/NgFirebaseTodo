import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {components} from './components';

@NgModule({
    declarations: [
        ...components
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        ...components,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class ShareModule { }

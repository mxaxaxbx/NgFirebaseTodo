import { NgModule } from '@angular/core';

import {ShareModule} from '../../shared/shared.module';

import {components} from './components';

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        ShareModule
    ],
    exports: [
        ...components,
        ShareModule
    ]
})
export class TodoSharedModule {}

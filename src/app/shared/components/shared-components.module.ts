import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { ConsultaGridComponent } from './consulta/consulta-grid.component';

@NgModule({
    imports: [CommonModule],
    exports: [ConsultaGridComponent],
    declarations: [ConsultaGridComponent],
    providers: [],
})
export class SharedComponentsModule { }

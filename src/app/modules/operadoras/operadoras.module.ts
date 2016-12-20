import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OperadorasRoutingModule} from './operadoras-routing.module';
import {operadorasRoutedComponents} from './operadoras-routes';

@NgModule({
  imports: [
    CommonModule,
    OperadorasRoutingModule,
  ],
  declarations: [operadorasRoutedComponents]
})
export class OperadorasModule { }

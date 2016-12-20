import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProdutosRoutingModule} from './produtos-routing.module';
import {produtosRoutedComponents} from './produtos-routes';
import {SharedComponentsModule} from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule,
    SharedComponentsModule

  ],
  declarations: [
    produtosRoutedComponents,
  ]
})
export class ProdutosModule { }

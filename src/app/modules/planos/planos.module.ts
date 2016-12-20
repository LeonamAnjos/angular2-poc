import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanosRoutingModule, routedComponents} from './planos-routing.routing';

@NgModule({
  imports: [
    CommonModule,
    PlanosRoutingModule
  ],
  declarations: [routedComponents]
})
export class PlanosModule { }

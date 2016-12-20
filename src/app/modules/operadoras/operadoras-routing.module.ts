import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {operadorasRoutes} from './operadoras-routes';

@NgModule({
  imports: [RouterModule.forChild(operadorasRoutes)],
  exports: [RouterModule]
})
export class OperadorasRoutingModule {}

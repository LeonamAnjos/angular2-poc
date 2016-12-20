import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {produtosRoutes} from './produtos-routes';

@NgModule({
  imports: [RouterModule.forChild(produtosRoutes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {}

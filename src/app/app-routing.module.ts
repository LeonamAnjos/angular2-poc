import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'operadoras', loadChildren: 'app/modules/operadoras/operadoras.module#OperadorasModule' },
  { path: 'produtos', loadChildren: 'app/modules/produtos/produtos.module#ProdutosModule' },
  { path: 'planos', loadChildren: 'app/modules/planos/planos.module#PlanosModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [];

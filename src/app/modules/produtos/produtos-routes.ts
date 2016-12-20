import {Routes} from '@angular/router';
import {ConsultaProdutosComponent} from './consulta-produtos/consulta-produtos.component';

export const produtosRoutes: Routes = [
  { path: '', component: ConsultaProdutosComponent },
];

export const produtosRoutedComponents = [
  ConsultaProdutosComponent,
];

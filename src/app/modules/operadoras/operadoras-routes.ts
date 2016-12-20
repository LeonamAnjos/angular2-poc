import {Routes} from '@angular/router';
import {ConsultaOperadorasComponent} from './consulta-operadoras/consulta-operadoras.component';

export const operadorasRoutes: Routes = [
  { path: '', component: ConsultaOperadorasComponent },
];

export const operadorasRoutedComponents = [
  ConsultaOperadorasComponent,
];

import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {routedComponents} from './dashboard.routes';

@NgModule({
  imports: [
    DashboardRoutingModule,
  ],
  declarations: [routedComponents],
})
export class DashboardModule {}

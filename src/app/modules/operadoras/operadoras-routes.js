"use strict";
exports.operadorasRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'operadoras', loadChildren: 'app/modules/operadoras/operadoras.module#OperadorasModule' },
];

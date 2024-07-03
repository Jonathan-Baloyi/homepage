import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('../../../billing/src/app/app.module').then((m) => m.AppModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('../../../reports/src/app/app.module').then((m) => m.AppModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'general',
        component: GeneralComponent,
        data: {
          title: "General",
          breadcrumb: "General"
        }
      },
      {
        path: 'chart',
        component: ChartComponent,
        data: {
          title: "Chart",
          breadcrumb: "Chart"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }

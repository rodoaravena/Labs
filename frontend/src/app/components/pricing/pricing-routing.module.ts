import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PricingComponent,
        data: {
          title: "Pricing",
          breadcrumb: ""
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }

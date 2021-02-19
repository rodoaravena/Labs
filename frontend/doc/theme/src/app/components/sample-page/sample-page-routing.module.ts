import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePageComponent } from './sample-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SamplePageComponent,
        data: {
          title: "Sample Page",
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
export class SamplePageRoutingModule { }

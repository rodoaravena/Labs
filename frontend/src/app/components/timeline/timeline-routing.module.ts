import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Timeline1Component } from './timeline1/timeline1.component';
import { Timeline2Component } from './timeline2/timeline2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'timeline1',
        component: Timeline1Component,
        data: {
          title: "Timeline1",
          breadcrumb: "Timeline1"
        }
      },
      {
        path: 'timeline2',
        component: Timeline2Component,
        data: {
          title: "Timeline2",
          breadcrumb: "Timeline2"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }

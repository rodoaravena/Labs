import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './to-do.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ToDoComponent,
        data: {
          title: "To-Do",
          breadcrumb: ""
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoFirebaseComponent } from './to-do-firebase.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ToDoFirebaseComponent,
        data: {
          title: "To-Do-Firebase",
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
export class ToDoFirebaseRoutingModule { }

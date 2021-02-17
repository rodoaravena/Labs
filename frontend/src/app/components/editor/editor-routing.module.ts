import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EditorComponent,
        data: {
          title: "Editors",
          breadcrumb: "Editors"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }

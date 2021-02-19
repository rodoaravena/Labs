import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeBaseComponent } from './knowledge-base.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: KnowledgeBaseComponent,
        data: {
          title: "Knowledge Base",
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
export class KnowledgeBaseRoutingModule { }

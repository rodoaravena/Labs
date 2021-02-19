import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FaqComponent,
        data: { 
          title: "FAQ",
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
export class FaqRoutingModule { }

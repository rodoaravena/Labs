import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details',
        component: BlogDetailComponent,
        data: {
          title: "Blog-Detail",
          breadcrumb: "Blog-Detail"
        }
      },
      {
        path: 'single',
        component: BlogSingleComponent,
        data: {
          title: "Blog-Single",
          breadcrumb: "Blog-Single"
        }
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

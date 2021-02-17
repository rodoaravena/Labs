import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SocialAppComponent,
        data: {
          title: "Social App",
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
export class SocialAppRoutingModule { }

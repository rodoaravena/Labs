import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningDetailComponent } from './learning-detail/learning-detail.component';
import { LearningListComponent } from './learning-list/learning-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'learninglist',
        component: LearningListComponent,
        data: {
          title: "Learning List",
          breadcrumb: "learning"
        }
      },
      {
        path: 'learning-detail/:id',
        component: LearningDetailComponent,
        data: {
          title: "Detail Course",
          breadcrumb: "Detail Course"
        }
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }

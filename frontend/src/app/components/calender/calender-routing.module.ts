import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: CalenderComponent,
      data: {
        title: "Calender",
        breadcrumb: "Calender"
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }

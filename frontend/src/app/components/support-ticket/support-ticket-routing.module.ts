import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportTicketComponent } from './support-ticket.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SupportTicketComponent,
        data: {
          title: "Support Ticket",
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
export class SupportTicketRoutingModule { }

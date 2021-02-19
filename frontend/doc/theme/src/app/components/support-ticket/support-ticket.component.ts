import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { supportDB } from '../../shared/data/tables/support-ticket';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SupportTicketComponent implements OnInit {

  public support = []

  constructor() {
    this.support = supportDB.ticket;
  }

  public settings = {
    columns: {
      img: {
        title: 'Image',
        type: 'html',
      },
      position: {
        title: 'Position'
      },
      salary: {
        title: 'Salary'
      },
      office: {
        title: 'Office'
      },
      skill: {
        title: 'Skill',
        type: 'html',
      },
      extn: {
        title: 'Extn'
      },
      email: {
        title: 'Email'
      }
    },
  };
  
  ngOnInit() { }

}

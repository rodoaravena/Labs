import { Component } from '@angular/core';
import { companyDB } from '../../../../shared/data/tables/company';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent {

  editing = {};
  public company = [];

  constructor() {
    this.company = companyDB.data;
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.company[rowIndex][cell] = event.target.value;
    this.company = [...this.company];
  }

}

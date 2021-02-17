import { Component, OnInit } from '@angular/core';
import { companyDB } from '../../../../shared/data/tables/company';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicNgxDatatableComponent {

  public company = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.company = companyDB.data;
  }

}

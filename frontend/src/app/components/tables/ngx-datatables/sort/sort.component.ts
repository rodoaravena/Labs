import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { companyDB } from 'src/app/shared/data/tables/company';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  rows = [];

  columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor() {
    this.rows = companyDB.data;
  }
  ngOnInit(): void {
  }

}

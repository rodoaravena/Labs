import { Component, OnInit } from '@angular/core';
import { JobDB } from '../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobs: any

  constructor() {
    this.jobs = JobDB.Job_Category
  }

  ngOnInit() { }

}

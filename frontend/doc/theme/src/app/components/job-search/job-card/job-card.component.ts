import { Component, OnInit } from '@angular/core';
import { JobDB } from '../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  public jobs: any

  constructor() {
    this.jobs = JobDB.Job_Category
  }

  ngOnInit() { }

}

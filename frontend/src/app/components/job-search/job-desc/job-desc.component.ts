import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDB } from '../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.scss']
})
export class JobDescComponent implements OnInit {

  public jobs: any
  public arr: any

  constructor(private route: ActivatedRoute, private router: Router) {
    this.jobs = JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter((items) => {
        if (items.Id === id) {
          this.arr = items;
        }
      })
    })
  }

  applyClick(arr) {
    this.router.navigate(['/job-search/job-apply', arr.Id]);
  }

  ngOnInit() { }

}

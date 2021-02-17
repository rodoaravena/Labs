import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent implements OnInit {

  public isFilter: boolean = false;
  public isLocation: boolean = false;
  public isJob_Title: boolean = false;
  public isIndustry: boolean = false;
  public isSpecific_skills: boolean = false;

  constructor() { }

  ngOnInit() { }

}

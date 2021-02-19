import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.component.html',
  styleUrls: ['./learning-filter.component.scss']
})
export class LearningFilterComponent implements OnInit {

  public isCourse: boolean = false;
  public isIndustry: boolean = false;
  public isUpcomimngCourse: boolean = false;
  public isCategories: boolean

  constructor() { }

  ngOnInit() { }

}

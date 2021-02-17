import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningDB } from '../../../shared/data/learning/learning';

@Component({
  selector: 'app-learning-list',
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss']
})
export class LearningListComponent implements OnInit {

  public courses = []

  constructor(private route: ActivatedRoute, private router: Router) {
    this.courses = LearningDB.lang
  }

  detailview(course) {
    this.router.navigate(['/learning/learning-detail', course.Id]);
  }

  ngOnInit() { }

}

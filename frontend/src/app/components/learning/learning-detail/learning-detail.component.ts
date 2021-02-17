import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningDB } from '../../../shared/data/learning/learning';

@Component({
  selector: 'app-learning-detail',
  templateUrl: './learning-detail.component.html',
  styleUrls: ['./learning-detail.component.scss']
})
export class LearningDetailComponent implements OnInit {

  public courses
  public arr

  constructor(private route: ActivatedRoute, private router: Router) {
    this.courses = LearningDB.lang
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.courses.filter((items) => {
        if (items.Id === id) {
          this.arr = items;
        }
      })
    })
  }

  ngOnInit() { }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { LearningDetailComponent } from './learning-detail/learning-detail.component';
import { LearningListComponent } from './learning-list/learning-list.component';

import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [LearningFilterComponent, LearningDetailComponent, LearningListComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class LearningModule { }

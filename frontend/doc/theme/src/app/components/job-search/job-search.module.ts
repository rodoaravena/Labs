import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [JobListComponent, JobApplyComponent, JobDescComponent, JobFilterComponent, JobCardComponent],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularMultiSelectModule,
    SharedModule
  ]
})
export class JobSearchModule { }

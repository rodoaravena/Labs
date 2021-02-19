import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [GeneralComponent, ChartComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgbModule,
    CountToModule,
    CarouselModule,
    ChartistModule,
    ChartsModule,
    NgxChartsModule,
    FormsModule,
    SharedModule
  ]
})
export class WidgetsModule { }

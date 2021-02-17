import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { GoogleComponent } from './google/google.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';

@NgModule({
  declarations: [GoogleComponent, ChartjsComponent, ChartistComponent, NgxChartComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    Ng2GoogleChartsModule,
    ChartsModule,
    ChartistModule,
    NgxChartsModule
  ]
})
export class ChartModule { }

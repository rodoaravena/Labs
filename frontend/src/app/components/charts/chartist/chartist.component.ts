import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from '../../../shared/data/chart/chartist';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartistComponent {

  constructor() { }

  // Charts
  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;
  public chart4 = chartData.chart4;
  public chart5 = chartData.chart5;
  public chart6 = chartData.chart6;
  public chart7 = chartData.chart7;
  public chart8 = chartData.chart8;
  public chart9 = chartData.chart9;
  public chart10 = chartData.chart10;
  public chart11 = chartData.chart11;
  public chart12 = chartData.chart12;
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from '../../../shared/data/widgets-chart/chart-widget';
import { monthlydoughnutData, dailydoughnutData } from '../../../shared/data/widgets-chart/chart-widget';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class ChartComponent implements OnInit {
  public isOpened : boolean = true;
  
  constructor() {
    Object.assign(this, { monthlydoughnutData, dailydoughnutData })
  }

  public monthlydoughnutData = monthlydoughnutData;
  public dailydoughnutData = dailydoughnutData;

  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;

  public WidgetBarChart1 = chartData.WidgetBarChart1;
  public WidgetBarChart2 = chartData.WidgetBarChart2;

  public liveProductChart = chartData.liveProductChart;

  public turnOverChart = chartData.turnOverChart;
  public monthlyChart = chartData.monthlyChart;

  public usesChart = chartData.usesChart;
  public financeWidget = chartData.financeWidget;

  public orderStatusWidget = chartData.orderStatusWidget;
  public skillWidget = chartData.skillWidget;

  // Doughnut Chart (Monthlt visitor chart)
  public monthlydoughnutChartColorScheme = chartData.monthlydoughnutChartcolorScheme;
  public monthlydoughnutChartShowLabels = chartData.monthlydoughnutChartShowLabels;
  public monthlydoughnutChartGradient = chartData.monthlydoughnutChartGradient;

  // Doughnut Chart (Daily visitor chart)
  public dailydoughnutChartColorScheme = chartData.dailydoughnutChartcolorScheme;
  public dailydoughnutChartShowLabels = chartData.dailydoughnutChartShowLabels;
  public dailydoughnutChartGradient = chartData.dailydoughnutChartGradient;

  ngOnInit() { }
}
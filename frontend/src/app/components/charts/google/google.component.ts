import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/chart/google-chart';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent {

  constructor() { }

  // Pie Chart
  public pieChart1 = chartData.pieChart1;
  public pieChart2 = chartData.pieChart2;
  public pieChart3 = chartData.pieChart3;
  public pieChart4 = chartData.pieChart4;
  // Area Chart
  public areaChart1 = chartData.areaChart1;
  public areaChart2 = chartData.areaChart2;
  // Column Chart
  public columnChart1 = chartData.columnChart1;
  public columnChart2 = chartData.columnChart2;
  // Bar Chart
  public barChart1 = chartData.barChart1;
  public barChart2 = chartData.barChart2;
  // Line Chart
  public lineChart = chartData.lineChart;
  // Combo Chart
  public comboChart = chartData.comboChart;
  public geoChartData = {
    chartType: 'GeoChart',
    dataTable: [
      ['City', 'Population'],
      ['Melbourne', 456789]
    ],
    options: {
      'region': 'IT',
      'displayMode': 'markers',
      colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"]
    }
  };
}

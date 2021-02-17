import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/crypto';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BitcoinComponent implements OnInit {

  public isBTC = false;
  public isETH = false;
  public isDASH = false;

  constructor() { }

  ngOnInit() { }

  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;
  public chart4 = chartData.chart4;

  public saleChartType = chartData.saleChartType;
  public saleChartLable = chartData.saleChartLabels;
  public saleChartData = chartData.saleChartData;
  public saleChartOption = chartData.saleChartOptions;
  public saleChartColor = chartData.saleChartColors;
  public saleChartLegend = chartData.saleChartLegend;

  //Invest Chart data and options
  public dailyChartLabels = chartData.dailyChartLabels;
  public dailyChartData = chartData.dailyChartData;
  public dailyChartColors = chartData.dailyChartColors;
  public dailyChartType = chartData.dailyChartType;
  public dailyChartLegend = chartData.dailyChartLegend;
  public dailyChartOptions = chartData.dailyChartOptions

}

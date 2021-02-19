import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { doughnutData, vertical_stack_chart, multiData, } from '../../../shared/data/dashboard/project';
import * as graphoptions from '../../../shared/data/dashboard/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  public doughnutData = doughnutData;
  public vertical_stack_chart = vertical_stack_chart;

  constructor() {
    Object.assign(this, { doughnutData, vertical_stack_chart, multiData, })
  }

  // doughnut
  public view = graphoptions.view;
  public doughnutChartColorScheme = graphoptions.doughnutChartcolorScheme;
  public doughnutChartShowLabels = graphoptions.doughnutChartShowLabels;
  public doughnutChartGradient = graphoptions.doughnutChartGradient;

  //vertical_stack_chart
  public verticalStackChartColorScheme = graphoptions.colorScheme;
  public verticalStackChartshowXAxis = graphoptions.showXAxis;
  public verticalStackChartshowYAxis = graphoptions.showYAxis;
  public verticalStackChartgradient = graphoptions.gradient;
  public verticalStackChartshowLegend = graphoptions.showLegend;
  public verticalStackChartshowXAxisLabel = graphoptions.showXAxisLabel;
  public verticalStackChartshowYAxisLabel = graphoptions.showYAxisLabel;

  public chart1 = graphoptions.chart1;
  public chart2 = graphoptions.chart2;
  public chart3 = graphoptions.chart3;
  public chart4 = graphoptions.chart4;
  public chart5 = graphoptions.chart5;
  public chart6 = graphoptions.chart6;

  public pieChart1 = graphoptions.pieChart1;
  public barChartSingle1 = graphoptions.barChartSingle1;
  public barChartSingle2 = graphoptions.barChartSingle2;
  public barChartSingle3 = graphoptions.barChartSingle3;

  ngOnInit() { }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import * as chartData from './../../../shared/data/dashboard/university';
declare var require: any
var Knob = require('knob') // browserify require

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UniversityComponent implements OnInit {
  
  public date : any
  constructor() { }

  ngOnInit() {
    var ranker = Knob({
      value: 25,
      angleOffset: -125,
      angleArc: 250,
      className: "review",
      lineCap: "round",
      thickness: 0.2,
      width: 295,
      height: 295,
      fgColor: primary
    })
    document.getElementById('ranker').append(ranker)

    var student = Knob({
      value: 85,
      angleOffset: 80,
      angleArc: 360,
      className: "review",
      lineCap: "round",
      thickness: 0.1,
      width: 180,
      height: 180,
      fgColor: '#fff',
      bgColor: primary
    })
    document.getElementById('student').append(student)

  }

  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;
  public chart4 = chartData.chart4;
  public chart5 = chartData.chart5;
  public admissionChartType = chartData.admissionChartType;
  public admissionChartLabels = chartData.admissionChartLabels;
  public admissionChartData = chartData.admissionChartData;
  public admissionChartOptions = chartData.admissionChartOptions;
  public admissionChartColors = chartData.admissionChartColors;
  public admissionChartLegend = chartData.admissionChartLegend;
}

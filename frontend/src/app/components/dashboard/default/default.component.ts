import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/default';
declare var require: any
var Knob = require('knob')// browserify require

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var profit = Knob({
      value: 35,
      angleOffset: 90,
      className: "review",
      thickness: 0.2,
      width: 270,
      height: 270,
      fgColor: primary,
      bgColor: '#f6f7fb',
      lineCap: 'round'
    })
    document.getElementById('profit').append(profit)
  }

  // Chart Data  
  public chart1 = chartData.chartBox1;
  public chart2 = chartData.chartBox2;
  public chart3 = chartData.chartBox3;
  public chart4 = chartData.chartProduction;
  public chart5 = chartData.chartCalculation;

}

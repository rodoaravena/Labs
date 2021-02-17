import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as data from './../../../shared/data/dashboard/e-commerce';
declare var require: any
var Knob = require('knob') // browserify require

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ECommerceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var review = Knob({
      value: 35,
      angleOffset: 180,
      className: "review",
      thickness: 0.1,
      width: 290,
      height: 290,
      fgColor: primary
    })
    document.getElementById('review').append(review)
  }

  public slidesStore = [{
    id: 1,
    icon: 'dollar-sign',
    title: 'Total Earning',
    number: 72
  },
  {
    id: 2,
    icon: 'map-pin',
    title: 'Total Web Visitor',
    number: 65
  },
  {
    id: 3,
    icon: 'shopping-cart',
    title: 'Total Sale Product',
    number: 96
  },
  {
    id: 4,
    icon: 'trending-down',
    title: 'Company Loss',
    number: 89
  },
  {
    id: 5,
    icon: 'dollar-sign',
    title: 'Total Earning',
    number: 72
  }]

  public customOptions: any = {
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      420: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      932: {
        items: 4,
        nav: false
      }
    }
  }

  // Charts1
  public saleChartType = data.saleChartType;
  public saleChartLable = data.saleChartLabels;
  public saleChartData = data.saleChartData;
  public saleChartOption = data.saleChartOptions;
  public saleChartColor = data.saleChartColors;
  public saleChartLegend = data.saleChartLegend;

  // Charts1
  public chartType1 = data.lineChartType1;
  public chartLable1 = data.lineChartLabels1;
  public chartData1 = data.lineChartData1;
  public chartOption1 = data.lineChartOptions1;
  public chartColor1 = data.lineChartColors1;
  public chartLegend1 = data.lineChartLegend1;

  // Chart2
  public chartType2 = data.lineChartType2;
  public chartLable2 = data.lineChartLabels2;
  public chartData2 = data.lineChartData2;
  public chartOption2 = data.lineChartOptions2;
  public chartColor2 = data.lineChartColors2;
  public chartLegend2 = data.lineChartLegend2;

  //Static chart
  public staticChartType = data.staticChartType;
  public staticChartLable = data.staticChartLabels;
  public staticChartData = data.staticChartData;
  public staticChartOption = data.staticChartOptions;
  public staticChartColor = data.staticChartColors;
  public staticChartLegend = data.staticChartLegend;

}

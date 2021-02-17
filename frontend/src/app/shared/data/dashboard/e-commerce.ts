var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

//Sale chart
export var saleChartType = 'line';
export var saleChartLabels: Array<any> = ["2009", "2010", "2011", "2012", "2013", "2014", "2015"];
export var saleChartData: Array<any> = [0, 2.25, 1.25, 3, 1.25, 2.25, 0];
export var saleChartOptions: any = {
  responsive: true,
  animation: false,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true,
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true
      }
    }]
  }
};
export var saleChartColors: Array<any> = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary
}];
export var saleChartLegend = false;


//Line chart
export var lineChartType1 = 'line';
export var lineChartLabels1: Array<any> = ["", "2009", "2010", "2011", "2012", "2013", "2014"];
export var lineChartData1: Array<any> = [20, 33, 20, 50, 20, 33, 20, 0];
export var lineChartOptions1: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true,
      }
    }],
    yAxes: [{
      display: true,
    }]
  }
};
export var lineChartColors1: Array<any> = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary,
  lineTension: 0,
}];
export var lineChartLegend1 = false;

//Line chart 2
export var lineChartType2 = 'line';
export var lineChartLabels2: Array<any> = ["", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
export var lineChartData2: Array<any> = [5, 0, 5, 0, 15, 0, 5, 0, 5];
export var lineChartOptions2: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true,
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        fixedStepSize: 5,
        precision: 0
      }
    }]
  }
};
export var lineChartColors2: Array<any> = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBordereWidth: 5,
  pointBorderColor: primary,
  lineTension: 0,
}];
export var lineChartLegend2 = false;




export var staticChartType = 'line';
export var staticChartLabels: Array<any> = ["0", "50", "100", "150", "200", "250", "300", "350"];
export var staticChartData: Array<any> = [1.000000000, 0.642787610, -0.173648178, -0.866025404, -0.939692621, -0.342020143, 0.500000000, 0.984807753];
export var staticChartOptions: any = {
  responsive: true,
  scaleShowVerticalLines: false,
  maintainAspectRatio: false,
  animation: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true,
      },
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true
      },
    }]
  }
};
export var staticChartColors: Array<any> = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary
}];
export var staticChartLegend = false;

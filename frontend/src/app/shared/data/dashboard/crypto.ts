import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

// Chart 1
export var chart1: Chart = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
      [8, 3, 7.5, 4, 7, 4]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Chart 2
export var chart2: Chart = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
      [8, 3, 7.5, 4, 7, 4]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Chart 3
export var chart3: Chart = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
      [8, 3, 7.5, 4, 7, 4]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Chart 4
export var chart4: Chart = {
  type: 'Bar',
  data: {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    series: [
      [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
      [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]
    ]
  },
  options: {
    seriesBarDistance: 12,
    chartPadding: {
      left: 0,
      right: 0,
      bottom: 0,
    },
    axisX: {
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  },
  events: {
    created: (data) => {

    }
  }
};

//Sale chart
export var saleChartType = 'line';
export var saleChartLabels: Array<any> = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
export var saleChartData: Array<any> = [
  { data: [1, 2.5, 1.5, 3, 1.3, 2, 4, 4.5] },
  { data: [0, 1, 0.5, 1, 0.3, 1.6, 1.4, 2] }
];
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
        beginAtZero: true,
        precision: 0
      }
    }]
  }
};
export var saleChartColors: Array<any> = [
  {
    fill: false,
    borderColor: primary,
    borderWidth: 2.5,
    pointBackgroundColor: primary,
    pointBorderColor: primary,
    lineTension: 0
  },
  {
    fill: false,
    borderColor: secondary,
    borderWidth: 2.5,
    pointBackgroundColor: secondary,
    pointBorderColor: secondary,
    lineTension: 0
  },
];
export var saleChartLegend = false;

//Invest Chart data and options
export var dailyChartLabels: string[] = ['Bitcoin', 'Ripple', 'Invest'];
export var dailyChartData: number[] = [40, 8, 10];
export var dailyChartColors: any[] = [{
  backgroundColor: [primary, "#f6f6f6", secondary],
  borderAlign: 'center',
  borderColor: primary,
  weight: 1,
  borderWidth: 2
}];
export var dailyChartType = 'doughnut';
export var dailyChartLegend = true;
export var dailyChartOptions: any = {
  animation: {
    easing: 'easeOutBounce',
  },
  cutoutPercentage: 70,

  tooltips: {
    mode: 'index',
    intersect: true,
  },
  responsive: true,
  height: 500,
  maintainAspectRatio: false,
  legend: {
    display: false,
    fullWidth: true,
    onClick: true,
    position: 'center'
  }
};

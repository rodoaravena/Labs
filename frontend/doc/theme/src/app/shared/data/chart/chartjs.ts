// barChart
export var barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
export var barChartLabels: string[] = ["January", "February", "March", "April", "May", "June", "July"];
export var barChartType = 'bar';
export var barChartLegend = false;
export var barChartData: any[] = [
  { data: [35, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];
export var barChartColors: Array<any> = [
  {
    backgroundColor: '#4466f2',
    borderColor: "rgba(30, 166, 236, 0.8)",
    borderWidth: 1,
  },
  {
    backgroundColor: '#1ea6ec',
    borderColor: "rgba(68, 102, 242, 0.8)",
    borderWidth: 1,
  },
];

// LineGraph Chart
export var lineGraphOptions: any = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
export var lineGraphLabels: string[] = ["January", "February", "March", "April", "May", "June", "July"];
export var lineGraphType = 'line';
export var lineGraphLegend = false;
export var lineGraphData: any[] = [
  { data: [10, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];
export var lineGraphColors: Array<any> = [
  {
    backgroundColor: 'rgba(68, 102, 242, 0.3)',
    borderColor: "#4466f2",
    borderWidth: 2,
  },
  {
    backgroundColor: 'rgba(30, 166, 236, 0.3)',
    borderColor: "#1ea6ec",
    borderWidth: 2,
  },
];


// RadarGraph Chart
export var radarGraphOptions: any = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.2)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 3,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
export var radarGraphLabels: string[] = ["Ford", "Chevy", "Toyota", "Honda", "Mazda"];
export var radarGraphType = 'radar';
export var radarGraphLegend = false;
export var radarGraphData: any[] = [
  { data: [12, 3, 5, 18, 7] }
];
export var radarGraphColors: Array<any> = [{
  backgroundColor: 'rgba(68, 102, 242, 0.4)',
  borderColor: "#4466f2",
  borderWidth: 2,
}];

//line chart
export var lineChartData: Array<any> = [
  { data: [10, 20, 40, 30, 0, 20, 10, 30, 10] },
  { data: [20, 40, 10, 20, 40, 30, 40, 10, 20] },
  { data: [60, 10, 40, 30, 80, 30, 20, 90] }
];
export var lineChartLabels: Array<any> = ["", "10", "20", "30", "40", "50", "60", "70", "80"];
export var lineChartOptions: any = {
  responsive: true,
  scaleShowVerticalLines: false,
  maintainAspectRatio: false,

};
export var lineChartColors: Array<any> = [
  {
    backgroundColor: 'rgba(68, 102, 242, 0.3)',
    borderColor: "#4466f2",
    borderWidth: 2,
    lineTension: 0,
  },
  {
    backgroundColor: 'rgba(30, 166, 236, 0.3)',
    borderColor: "#1ea6ec",
    borderWidth: 2,
    lineTension: 0,
  },
  {
    backgroundColor: 'rgba(68, 102, 242, 0.4)',
    borderColor: "#4466f2",
    borderWidth: 2,
    lineTension: 0,
  }
];
export var lineChartLegend = false;
export var lineChartType = 'line';

// Doughnut
export var doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
export var doughnutChartData: number[] = [350, 450, 100];
export var doughnutChartColors: any[] = [{ backgroundColor: ["#4466f2", "#1ea6ec", "#FF5370"] }];
export var doughnutChartType = 'doughnut';
export var doughnutChartOptions: any = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};

// PolarArea
export var polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
export var polarAreaChartData: number[] = [300, 500, 100, 40, 120];
export var polarAreaLegend = false;
export var ploarChartColors: any[] = [{ backgroundColor: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff2046"] }];
export var polarAreaChartType = 'polarArea';
export var polarChartOptions: any = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};





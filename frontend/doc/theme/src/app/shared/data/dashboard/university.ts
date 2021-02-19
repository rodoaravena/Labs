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
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		series: [
			[2, 3, 2.5, 5, 1.5, 4.5, 3, 3.1],
			[3, 3.5, 6, 1.1, 5, 2.5, 3.2, 2]
		]
	},
	options: {
		low: 0,
		showPoint: false,
		chartPadding: {
			left: 0,
			right: 0,
		},
		axisY: {
			scaleMinSpace: 40
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
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		series: [
			[1.5, 3, 2, 1, 4, 1, 4, 2, 3, 2.5],
			[5, 4.7, 4, 3, 3.3, 3.7, 3, 3.8, 3, 2]
		]
	},
	options: {
		low: 0,
		showPoint: false,
		chartPadding: {
			left: 0,
			right: 0,
		},
		axisY: {
			scaleMinSpace: 40
		}
	},
	events: {
		created: (data) => {

		}
	}
};

// Chart 3
export var chart3: Chart = {
	type: 'Bar',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		series: [
			[1, 2, 1.5, 3, 1.5, 0.8, 1.5, 2],
			[6, 4, 5, 6.5, 3, 2, 5.5, 7]
		]
	},
	options: {
		seriesBarDistance: 12,
		chartPadding: {
			left: 0,
			right: 0,
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

// Chart 4
export var chart4: Chart = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
		series: [
			[50, 200, 150, 400, 300, 600, 700]
		]
	},
	options: {
		stackBars: true,
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
		draw: (data) => {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 2px'
				});
			}
		}
	}
};

// Chart 5
export var chart5: Chart = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
		series: [
			[50, 200, 150, 400, 300, 600, 700]
		]
	},
	options: {
		stackBars: true,
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
		draw: (data) => {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 2px'
				});
			}
		}
	}
};

//Admission chart
export var admissionChartType = 'line';
export var admissionChartLabels: Array<any> = ["", "1000", "2000", "3000", "4000", "5000", "6000"];
export var admissionChartData: Array<any> = [20, 25, 22, 25, 35, 30, 38, 35, 20];
export var admissionChartOptions: any = {
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
		}]
	}
};
export var admissionChartColors: Array<any> = [{
	fill: true,
	backgroundColor: "rgba(68, 102, 242,0.1)",
	borderColor: primary,
	borderWidth: 2.5,
	pointBackgroundColor: primary,
	pointBorderColor: primary,
	lineTension: 0,
}];
export var admissionChartLegend = false;
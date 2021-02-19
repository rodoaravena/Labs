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
export var chartBox1: Chart = {
	type: 'Line',
	data: {
		labels: ['01', '02', '03', '04', '05', '06', '07'],
		series: [
			[0, 2, 1.2, 4, 2, 3, 1.5, 0]
		],
	},
	options: {
		lineSmooth: Chartist.Interpolation.simple({
			divisor: 2
		}),
		fullWidth: !0,
		showArea: !0,
		chartPadding: {
			right: 0,
			left: 0,
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
			var defs = data.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradient2',
				x1: 1,
				y1: 1,
				x2: 0,
				y2: 0
			}).elem('stop', {
				offset: 0,
				'stop-color': primary
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': secondary
			});
		}
	}
};

// Chart 2
export var chartBox2: Chart = {
	type: 'Line',
	data: {
		labels: ['01', '02', '03', '04', '05', '06'],
		series: [
			[0, 2, 1.2, 4, 2, 3, 0]
		]
	},
	options: {
		lineSmooth: Chartist.Interpolation.simple({
			divisor: 2
		}),
		fullWidth: !0,
		showArea: !0,
		chartPadding: {
			right: 0,
			left: 0,
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
			var defs = data.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradient3',
				x1: 1,
				y1: 1,
				x2: 0,
				y2: 0
			}).elem('stop', {
				offset: 0,
				'stop-color': primary
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': secondary
			});
		}
	}
};

// Chart 3
export var chartBox3: Chart = {
	type: 'Line',
	data: {
		labels: ['01', '02', '03', '04', '05', '06', '07'],
		series: [
			[0, 2, 1.2, 4, 2, 3, 1.5, 2, 0]
		]
	},
	options: {
		lineSmooth: Chartist.Interpolation.simple({
			divisor: 2
		}),
		fullWidth: !0,
		showArea: !0,
		chartPadding: {
			right: 0,
			left: 0,
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
			var defs = data.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradient4',
				x1: 1,
				y1: 1,
				x2: 0,
				y2: 0
			}).elem('stop', {
				offset: 0,
				'stop-color': primary
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': secondary
			});
		}
	}
};

// Chart 4
export var chartCalculation: Chart = {
	type: 'Line',
	data: {
		labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
		series: [
			[0, 2, 1.2, 4, 2, 3, 1.5, 0],
			[0, 1, 2.2, 1.5, 3, 1.5, 2.25, 0]
		]
	},
	options: {
		low: 0,
		showArea: true,
		fullWidth: true,
		onlyInteger: true,
		chartPadding: {
			left: 0,
			right: 0,
		},
		axisY: {
			low: 0,
			scaleMinSpace: 50,
		},
		axisX: {
			showGrid: false
		}
	},
	events: {
		created: (data) => {
			var defs = data.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradient1',
				x1: 0,
				y1: 0,
				x2: 1,
				y2: 1
			}).elem('stop', {
				offset: 0,
				'stop-color': primary
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': secondary
			});
		}
	}
};

// Chart 5
export var chartProduction: Chart = {
	type: 'Line',
	data: {
		labels: ['2009', '2010', '2011', '2012'],
		series: [
			[0, 6, 2, 6],
			[0, 7, 1, 8]
		]
	},
	options: {
		fullWidth: true,
		chartPadding: {
			right: 40
		}
	},
	events: {
		created: (data) => {

		}
	}
};

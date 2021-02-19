import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

export var doughnutData = [
    {
        value: 300,
        name: "Frontend"

    },
    {
        value: 50,
        name: "Backend"
    },
    {
        value: 30,
        name: "Api"
    },
    {
        value: 100,
        name: "Issues"
    }
];

//doughnut-Chart
export var view: any[] = [285, 285];

//Options
export var doughnutChartShowLabels = false;
export var doughnutChartGradient = true;
export var doughnutChartcolorScheme = {
    domain: [primary, secondary, secondary, secondary]
};

export var multiData = [
    {
        "name": "Mon",
        "series": [
            {
                "name": "y",
                "value": 3
            },
            {
                "name": "z",
                "value": 2
            }]
    },
    {
        "name": "Tue",
        "series": [
            {
                "name": "y",
                "value": 3
            },
            {
                "name": "z",
                "value": 0
            }]
    },
    {
        "name": "Wen",
        "series": [
            {
                "name": "y",
                "value": 0
            },
            {
                "name": "z",
                "value": 1.5
            }]
    },
    {
        "name": "Thu",
        "series": [
            {
                "name": "y",
                "value": 2
            },
            {
                "name": "z",
                "value": 0
            }]
    },
    {
        "name": "Fri",
        "series": [
            {
                "name": "y",
                "value": 0
            },
            {
                "name": "z",
                "value": 3.5
            }]
    },
    {
        "name": "Sat",
        "series": [
            {
                "name": "y",
                "value": 3
            },
            {
                "name": "z",
                "value": 2
            }]
    },
    {
        "name": "sun",
        "series": [
            {
                "name": "y",
                "value": 0
            },
            {
                "name": "z",
                "value": 2
            }]
    }
];
//vertical-stack chart
export var vertical_stack_chart = [
    {
        x: "Mon",
        y: 3,
        z: 2
    },
    {
        x: "Tue",
        y: 3,
        z: null
    },
    {
        x: "Wed",
        y: 0,
        z: 1.5
    },
    {
        x: "Thu",
        y: 2,
        z: null
    },
    {
        x: "Fri",
        y: 0,
        z: 3.5
    },
    {
        x: "Sat",
        y: 3,
        z: 2

    },
    {
        x: "Sun",
        y: 0,
        z: 2
    }]

//Vertical stacked chart option
export var showXAxis = true;
export var showYAxis = true;
export var gradient = false;
export var showLegend = false;
export var showXAxisLabel = true;
export var showYAxisLabel = true;

export var colorScheme = {
    domain: [primary, secondary, primary, secondary]
};

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

export var chart1: Chart = {
    type: 'Line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06'],
        series: [
            [1, 5, 2, 5, 4, 3]
        ]
    },
    options: {
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        }),
        showArea: true,
        showPoint: false,
        fullWidth: true,
        chartpadding: {
            bottom: 0,
            left: 0,
            right: 0
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
                id: 'gradient5',
                x1: 1,
                y1: 0,
                x2: 0,
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

export var chart2: Chart = {
    type: 'Line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [[5, 2, 3, 1, 3, 2]]
    },
    options: {
        showArea: true,
        showPoint: false,
        fullWidth: true,
        chartpadding: {
            bottom: 0,
            left: 0,
            right: 0
        },
        axisX: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        },
        axisY: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        }
    },
    events: {
        created: (data) => {
            var defs = data.svg.elem('defs');
            defs.elem('linearGradient', {
                id: 'gradient6',
                x1: 1,
                y1: 0,
                x2: 0,
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

export var chart3: Chart = {
    type: 'Line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [[1, 2, 5, 1, 4, 3]]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        chartpadding: {
            bottom: 0,
            left: 0,
            right: 0
        },
        axisX: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        },
        axisY: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        }
    },
    events: {
        created: (data) => {
            var defs = data.svg.elem('defs');

            defs.elem('linearGradient', {
                id: 'gradient7',
                x1: 1,
                y1: 0,
                x2: 0,
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

export var chart4: Chart = {
    type: 'Line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [[1, 2, 4, 3, 2, 3]]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        chartpadding: {
            bottom: 0,
            left: 0,
            right: 0
        },
        axisX: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        },
        axisY: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        }
    },
    events: {
        created: (data) => {
            var defs = data.svg.elem('defs');
            defs.elem('linearGradient', {
                id: 'gradient8',
                x1: 1,
                y1: 0,
                x2: 0,
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

export var chart5: Chart = {
    type: 'Line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [[0, 5, 2, 3, 1, 3]]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        chartpadding: {
            bottom: 0,
            left: 0,
            right: 0
        },
        axisX: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        },
        axisY: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        }
    },
    events: {
        created: (data) => {
            var defs = data.svg.elem('defs');

            defs.elem('linearGradient', {
                id: 'gradient9',
                x1: 1,
                y1: 0,
                x2: 0,
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

export var chart6: Chart = {
    type: 'Line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [[1, 2, 3, 1, 2, 3]]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        chartpadding: {
            bottom: 0,
            left: 0,
            right: 0
        },
        axisX: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        },
        axisY: {
            low: 0,
            offset: -5,
            showLabel: false,
            showGrid: false
        }
    },
    events: {
        created: (data) => {
            var defs = data.svg.elem('defs');

            defs.elem('linearGradient', {
                id: 'gradient10',
                x1: 1,
                y1: 0,
                x2: 0,
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

export var pieChart1: any = {
    chartType: 'PieChart',
    dataTable: [
        ['Week', 'Day in week'],
        ['Mon', 15],
        ['Tue', 10],
        ['Wed', 15],
        ['Thu', 20],
        ['Fri', 25],
        ['sat', 20],
        ['Sun', 10]
    ],
    options: {
        title: 'My Daily Activities',
        height: 400,
        colors: [ primary, secondary, "#22af47", "#007bff", "#FF5370", "#22af47", "#ff9f40"],
        labels: false,
        backgroundColor:'transparent'
    },
};

export var barChartSingle1: Chart = {
    type: 'Bar',
    data: {
        series: [
            [5, 7, 3, 5, 2, 3, 9, 6, 5, 9],
            [5, 3, 5, 2, 5, 3, 3, 9, 6, 5],
            [9, 2, 9, 6, 5, 9, 7, 3, 5, 2]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            offset: 0
        },
        responsive: true,
        height: 70,
        width: 450,
        fill: [ primary, secondary, "#22af47"],
    }
};
export var barChartSingle2: Chart = {
    type: 'Bar',
    data: {
        series: [
            [5, 7, 3, 5, 2, 3, 9, 6, 5, 9],
            [5, 3, 5, 2, 5, 3, 3, 9, 6, 5],
            [9, 7, 9, 6, 5, 9, 7, 3, 5, 2]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            offset: 0
        },
        responsive: true,
        height: 70,
        width: 450,
        fill: [ primary, secondary, "#22af47"]
    }

};
export var barChartSingle3: Chart = {
    type: 'Bar',
    data: {
        series: [
            [9, 7, 3, 5, 2, 5, 3, 5, 3, 9],
            [6, 5, 9, 3, 5, 2, 5, 3, 6, 5],
            [9, 7, 9, 2, 5, 3, 7, 9, 5, 6]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            offset: 0
        },
        responsive: true,
        height: 70,
        width: 450,
        fill: [ primary, secondary, "#22af47"]
    }
};


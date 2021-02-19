import { Component, AfterViewChecked } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/server';
import { serverDB } from '../../../shared/data/tables/server';

import 'chartjs-plugin-streaming';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements AfterViewChecked {
  public explorer = []

  constructor() {
    this.explorer = serverDB.explorer;
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/tables/explorer.json');
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

  public settings = {
    columns: {
      name: {
        title: 'Name'
      },
      user: {
        title: 'User Name',
        type: 'html',
      },
      IO: {
        title: 'IO'
      },
      cpu: {
        title: 'CPU'
      },
      mem: {
        title: 'MEM'
      }
    }
  }; 

  ngAfterViewChecked() {}

  public latencyChartType = chartData.cpuChartType;
  public latencyChartLabels = chartData.latencyChartLabels;
  public latencyChartData = chartData.latencyChartData;
  public latencyChartOptions = chartData.latencyChartOptions;
  public latencyChartColors = chartData.latencyChartColors;
  public latencyChartLegend = chartData.latencyChartLegend;

  public memoryChartType = chartData.memoryChartType;
  public memoryChartLabels = chartData.memoryChartLabels;
  public memoryChartData = chartData.memoryChartData;
  public memoryChartOptions = chartData.memoryChartOptions;
  public memoryChartColors = chartData.memoryChartColors;
  public memoryChartLegend = chartData.memoryChartLegend;

  public cpuChartType = chartData.cpuChartType;
  public cpuChartLabels = chartData.cpuChartLabels;
  public cpuChartData = chartData.cpuChartData;
  public cpuChartOptions = chartData.cpuChartOptions;
  public cpuChartColors = chartData.cpuChartColors;
  public cpuChartLegend = chartData.cpuChartLegend;
}

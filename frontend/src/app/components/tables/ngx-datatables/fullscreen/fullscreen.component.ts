import { Component } from '@angular/core';
import { employeeDB } from '../../../../shared/data/tables/employee';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent {

  public employee = []

  constructor() {
    this.employee = employeeDB.emp;
  }

}

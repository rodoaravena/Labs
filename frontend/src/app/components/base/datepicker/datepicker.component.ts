import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {

  model      : NgbDateStruct;
  date       : { year: number, month: number };
  modelPopup
  modelDisabled : NgbDateStruct;
  disabled = true;
  modelCustom : NgbDateStruct;
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  modelFooter: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() { } 

  selectToday() {
    this.model = this.calendar.getToday();
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;

   onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralComponent implements OnInit, OnDestroy {

  model: NgbDateStruct;
  date: { year: number, month: number };
  public intmin: any;
  public intsec: any;
  public inthour: any;
  public time: Date = new Date();
  public jstoday = '';
  today: number = Date.now();

  constructor(private calender: NgbCalendar) {
    this.model = calender.getToday();
    this.jstoday = formatDate(this.time, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  owlcarousel = [
    {
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      img: "assets/images/dashboard/boy-2.png",
      name: "Poio klot",
      designation: "Developer"
    },
    {
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      img: "assets/images/dashboard/boy-2.png",
      name: "Poio klot",
      designation: "Developer"
    }
  ]
  owlcarouselOptions = {
    loop: true,
    margin: 10,
    items: 1,
    nav: false,
    dots: false
  };

  setTime() {
    this.intmin = setInterval(function () {
      var second = new Date().getSeconds();
      var sdegree = second * 6;
      var srotate = "rotate(" + sdegree + "deg)";
      var seconds = document.getElementById('sec').style.transform = srotate;
    }, 1000);
    this.intsec = setInterval(function () {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";
      var minits = document.getElementById('min').style.transform = mrotate;
    }, 1000);
    this.inthour = setInterval(function () {
      var hour = new Date().getHours();
      var mints = new Date().getMinutes();
      var hdegree = hour * 30 + (mints / 2);
      var hrotate = "rotate(" + hdegree + "deg)";
      var hours = document.getElementById('hour').style.transform = hrotate;
    }, 1000);
  }

  ngOnInit() {
    const now: Date = new Date()
    this.setTime();
  }


  ngOnDestroy() {
    if (this.intmin) {
      clearInterval(this.intmin);
    }
    if (this.intsec) {
      clearInterval(this.intsec);
    }
    if (this.inthour) {
      clearInterval(this.inthour);
    }
  }
}	

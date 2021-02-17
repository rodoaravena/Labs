import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-default',
  templateUrl: './form-default.component.html',
  styleUrls: ['./form-default.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FormDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

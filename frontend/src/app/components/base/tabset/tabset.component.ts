import { Component, OnInit } from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {

  currentJustify = 'start';
  currentOrientation = 'horizontal';

  constructor() { }

  ngOnInit() {  }

  public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
  }
}

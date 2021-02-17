import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
})
export class PopoverComponent implements OnInit {

  name = 'World';
  lastShown: Date;
  lastHidden: Date;

  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'top';
    config.triggers = 'click';
  }

  ngOnInit() {  }

  //Tooltip greeting on click as well as hover
  toggleWithGreeting(popover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({ greeting, language });
    }
  }

  recordShown() {
    this.lastShown = new Date();
  }

  recordHidden() {
    this.lastHidden = new Date();
  }

}

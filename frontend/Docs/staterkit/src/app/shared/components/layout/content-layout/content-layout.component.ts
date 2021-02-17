import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import * as feather from 'feather-icons';
import { CustomizerService } from '../../../services/customizer.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {
  
  constructor(public navServices: NavService, public customizer: CustomizerService) {   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }


}

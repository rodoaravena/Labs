import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class PaginationComponent implements OnInit {

  page = 4;
  advancePage = 1;
  currentPage = 3;
  isDisabled = true;

   constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit() {  }
  
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}

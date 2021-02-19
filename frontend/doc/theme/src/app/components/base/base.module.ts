import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent, NgbdModalContent, NgbdModal1Content, NgbdModal2Content } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabsetComponent } from './tabset/tabset.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [AccordionComponent, AlertComponent, ButtonsComponent, CarouselComponent, CollapseComponent, DatepickerComponent, DropdownComponent, ModalComponent, NgbdModalContent, NgbdModal1Content, NgbdModal2Content, PaginationComponent, PopoverComponent, ProgressbarComponent, RatingComponent, TabsetComponent, TimepickerComponent, TooltipComponent, TypeaheadComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [NgbdModalContent, NgbdModal1Content, NgbdModal2Content]
})
export class BaseModule { }

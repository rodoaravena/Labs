import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabsetComponent } from './tabset/tabset.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          title: "Accordion",
          breadcrumb: "Accordion"
        }
      },
      {
        path: 'alert',
        component: AlertComponent,
        data: {
          title: "Alert",
          breadcrumb: "Alert"
        }
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: "Buttons",
          breadcrumb: "Buttons"
        }
      },
      {
        path: 'carousel',
        component: CarouselComponent,
        data: {
          title: "Carousel",
          breadcrumb: "Carousel"
        }
      },
      {
        path: 'collapse',
        component: CollapseComponent,
        data: {
          title: "Collapse",
          breadcrumb: "Collapse"
        }
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {
          title: "Datepicker",
          breadcrumb: "Datepicker"
        }
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
        data: {
          title: "Dropdown",
          breadcrumb: "Dropdown"
        }
      },
      {
        path: 'modal',
        component: ModalComponent,
        data: {
          title: "Modal",
          breadcrumb: "Modal"
        }
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        data: {
          title: "Pagination",
          breadcrumb: "Pagination"
        }
      },
      {
        path: 'popover',
        component: PopoverComponent,
        data: {
          title: "Popover",
          breadcrumb: "Popover"
        }
      },
      {
        path: 'progressbar',
        component: ProgressbarComponent,
        data: {
          title: "Progressbar",
          breadcrumb: "Progressbar"
        }
      },
      {
        path: 'rating',
        component: RatingComponent,
        data: {
          title: "Rating",
          breadcrumb: "Rating"
        }
      },
      {
        path: 'tabset',
        component: TabsetComponent,
        data: {
          title: "Tabset",
          breadcrumb: "Tabset"
        }
      },
      {
        path: 'timepicker',
        component: TimepickerComponent,
        data: {
          title: "TimePicker",
          breadcrumb: "TimePicker"
        }
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          title: "Tooltip",
          breadcrumb: "Tooltip"
        }
      },
      {
        path: 'typeahead',
        component: TypeaheadComponent,
        data: {
          title: "Typeahead",
          breadcrumb: "Typeahead"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './bootstrap-tables/basic/basic.component'
import { BorderComponent } from './bootstrap-tables/border/border.component'
import { SizingComponent } from './bootstrap-tables/sizing/sizing.component'
import { StylingComponent } from './bootstrap-tables/styling/styling.component'
import { BasicNgxDatatableComponent } from './ngx-datatables/basic/basic.component';
import { EditingComponent } from './ngx-datatables/editing/editing.component';
import { FilterNgxComponent } from './ngx-datatables/filter/filter.component';
import { FullscreenComponent } from './ngx-datatables/fullscreen/fullscreen.component';
import { PagingComponent } from './ngx-datatables/paging/paging.component';
import { SelectionNgxComponent } from './ngx-datatables/selection/selection.component';
import { SortComponent } from './ngx-datatables/sort/sort.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          title: "Basic",
          breadcrumb: "Basic"
        }
      },
      {
        path: 'sizing',
        component: SizingComponent,
        data: {
          title: "Sizing",
          breadcrumb: "Sizing"
        }
      },
      {
        path: 'border',
        component: BorderComponent,
        data: {
          title: "Border",
          breadcrumb: "Border"
        }
      },
      {
        path: 'styling',
        component: StylingComponent,
        data: {
          title: "Styling",
          breadcrumb: "Styling"
        }
      },
      {
        path: 'ngx-datatables/basic',
        component: BasicNgxDatatableComponent,
        data: {
          title: "Basic",
          breadcrumb: "Ngx-Datatables / Basic"
        }
      },
      {
        path: 'ngx-datatables/editing',
        component: EditingComponent,
        data: {
          title: "Editing",
          breadcrumb: "Ngx-Datatables / Editing"
        }
      },
      {
        path: 'ngx-datatables/filter',
        component: FilterNgxComponent,
        data: {
          title: "Filter",
          breadcrumb: "Ngx-Datatables / Filter"
        }
      },
      {
        path: 'ngx-datatables/fullscreen',
        component: FullscreenComponent,
        data: {
          title: "FullScreen",
          breadcrumb: "Ngx-Datatables / FullScreen"
        }
      },
      {
        path: 'ngx-datatables/paging',
        component: PagingComponent,
        data: {
          title: "Paging",
          breadcrumb: "Ngx-Datatables / Paging"
        }
      },
      {
        path: 'ngx-datatables/selection',
        component: SelectionNgxComponent,
        data: {
          title: "Selection",
          breadcrumb: "Ngx-Datatables / Selection"
        }
      },
      {
        path: 'ngx-datatables/sort',
        component: SortComponent,
        data: {
          title: "Sorting Table",
          breadcrumb: "Sorting Table"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }

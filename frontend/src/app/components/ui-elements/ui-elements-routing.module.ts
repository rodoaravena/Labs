import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateColorComponent } from './state-color/state-color.component';
import { TypographyComponent } from './typography/typography.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { GridComponent } from './grid/grid.component';
import { TagNPillsComponent } from './tag-n-pills/tag-n-pills.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ShadowComponent } from './shadow/shadow.component';
import { ListComponent } from './list/list.component';
import { RibbionsComponent } from './ribbions/ribbions.component';
import { StepsComponent } from './steps/steps.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'state-color',
        component: StateColorComponent,
        data: {
          title: "State-Color",
          breadcrumb: "State-Color"
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: "Typography",
          breadcrumb: "Typography"
        }
      },
      {
        path: 'avatars',
        component: AvatarsComponent,
        data: {
          title: "Avatars",
          breadcrumb: "Avatars"
        }
      },
      {
        path: 'helper-classes',
        component: HelperClassesComponent,
        data: {
          title: "Helper-Classes",
          breadcrumb: "Helper-Classes"
        }
      },
      {
        path: 'grid',
        component: GridComponent,
        data: {
          title: "Grid",
          breadcrumb: "Grid"
        }
      },
      {
        path: 'tag-n-pills',
        component: TagNPillsComponent,
        data: {
          title: "Tag and Pills",
          breadcrumb: "Tag and Pills"
        }
      },
      {
        path: 'spinner',
        component: SpinnersComponent,
        data: {
          title: "Spinner",
          breadcrumb: "Spinner"
        }
      },
      {
        path: 'shadow',
        component: ShadowComponent,
        data: {
          title: "Shadow",
          breadcrumb: "Shadow"
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: "List",
          breadcrumb: "List"
        }
      },
      {
        path: 'ribbons',
        component: RibbionsComponent,
        data: {
          title: "Ribbons",
          breadcrumb: "Ribbons"
        }
      },
      {
        path: 'steps',
        component: StepsComponent,
        data: {
          title: "Steps",
          breadcrumb: "Steps"
        }
      },
      {
        path: 'breadcrumb',
        component: BreadcrumbComponent,
        data: {
          title: "Breadcrumb",
          breadcrumb: "Breadcrumb"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }

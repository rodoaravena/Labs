import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { FlatComponent } from './flat/flat.component';
import { EdgeComponent } from './edge/edge.component';
import { RaisedComponent } from './raised/raised.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: "Default",
          breadcrumb: "Default"
        }
      },
      {
        path: 'flat',
        component: FlatComponent,
        data: {
          title: "Flat",
          breadcrumb: "Flat"
        }
      },
      {
        path: 'edge',
        component: EdgeComponent,
        data: {
          title: "Edge",
          breadcrumb: "Edge"
        }
      },
      {
        path: 'raised',
        component: RaisedComponent,
        data: {
          title: "Raised",
          breadcrumb: "Raised"
        }
      },
      {
        path: 'group',
        component: ButtonGroupComponent,
        data: {
          title: "Group",
          breadcrumb: "Group"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }

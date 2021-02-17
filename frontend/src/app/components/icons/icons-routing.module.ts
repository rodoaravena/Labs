import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeIconComponent } from './font-awesome-icon/font-awesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag',
        component: FlagIconComponent,
        data: {
          title: "Flag",
          breadcrumb: "Flag"
        }
      },
      {
        path: 'fontawesome',
        component: FontAwesomeIconComponent,
        data: {
          title: "FontAwesome",
          breadcrumb: "FontAwesome"
        }
      },
      {
        path: 'ico',
        component: IcoIconComponent,
        data: {
          title: "Ico",
          breadcrumb: "Ico"
        }
      },
      {
        path: 'themify',
        component: ThemifyIconComponent,
        data: {
          title: "Themify",
          breadcrumb: "Themify"
        }
      },
      {
        path: 'feather',
        component: FeatherIconComponent,
        data: {
          title: "Feather",
          breadcrumb: "Feather"
        }
      },
      {
        path: 'whether',
        component: WeatherIconComponent,
        data: {
          title: "Whether",
          breadcrumb: "Whether"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }

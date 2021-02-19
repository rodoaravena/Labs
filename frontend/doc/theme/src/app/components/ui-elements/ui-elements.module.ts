import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [StateColorComponent, TypographyComponent, AvatarsComponent, HelperClassesComponent, GridComponent, TagNPillsComponent, SpinnersComponent, ShadowComponent, ListComponent, RibbionsComponent, StepsComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class UiElementsModule { }

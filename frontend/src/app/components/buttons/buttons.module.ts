import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { DefaultComponent } from './default/default.component';
import { FlatComponent } from './flat/flat.component';
import { EdgeComponent } from './edge/edge.component';
import { RaisedComponent } from './raised/raised.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  declarations: [DefaultComponent, FlatComponent, EdgeComponent, RaisedComponent, ButtonGroupComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    NgbModule
  ]
})
export class ButtonsModule { }

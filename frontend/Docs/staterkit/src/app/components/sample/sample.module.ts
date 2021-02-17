import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorVersionRoutingModule } from './sample-routing.module';
import {SampleComponent} from '../sample/sample-component/sample-component'
@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    ColorVersionRoutingModule
  ]
})
export class SampleModule { }

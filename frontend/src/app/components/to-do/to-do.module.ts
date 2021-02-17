import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';

@NgModule({
  declarations: [ToDoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToDoRoutingModule
  ]
})
export class ToDoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToDoFirebaseRoutingModule } from './to-do-firebase-routing.module';
import { ToDoFirebaseComponent } from './to-do-firebase.component';

@NgModule({
  declarations: [ToDoFirebaseComponent],
  imports: [
    CommonModule,
    ToDoFirebaseRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class ToDoFirebaseModule { }

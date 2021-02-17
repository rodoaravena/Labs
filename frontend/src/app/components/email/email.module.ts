import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ngx-ckeditor';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';

@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CKEditorModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }

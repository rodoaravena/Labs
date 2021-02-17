import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    CKEditorModule,
    AngularEditorModule
  ]
})
export class EditorModule { }

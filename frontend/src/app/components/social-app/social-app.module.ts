import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../../shared/shared.module";

import { SocialAppRoutingModule } from './social-app-routing.module';
import { SocialAppComponent } from './social-app.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
@NgModule({
  declarations: [SocialAppComponent, ImageGalleryComponent],
  imports: [
    CommonModule,
    SocialAppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    GalleryModule.forRoot()
  ]
})
export class SocialAppModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  declarations: [SearchResultComponent, ImageGalleryComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NgbModule,
    GalleryModule.forRoot()
  ]
})
export class SearchResultModule { }

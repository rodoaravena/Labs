import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryDescComponent } from './gallery-desc/gallery-desc.component';
import { MesonryComponent } from './mesonry/mesonry.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { CrystalGalleryModule } from 'ngx-crystal-gallery';
import { NgxMasonryModule } from 'ngx-masonry';
import 'hammerjs';
import 'mousetrap';

@NgModule({
  declarations: [GalleryGridComponent, GalleryDescComponent, MesonryComponent, HoverEffectComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    Angular2PhotoswipeModule,
    GalleryModule.forRoot(),
    MasonryGalleryModule,
    CrystalGalleryModule,
    NgxMasonryModule
  ]
})
export class GalleryDemoModule { }

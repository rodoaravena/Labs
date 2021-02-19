import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceRoutingModule } from './advance-routing.module';
import { Ng5SliderModule } from 'ng5-slider';
import { ImageCropperModule } from './image-crop/image-cropper/image-cropper.module';
import { DragulaModule } from 'ng2-dragula';
import { FileUploadModule } from 'ng2-file-upload';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { SharedModule } from "../../shared/shared.module";

import { ScrollableComponent } from './scrollable/scrollable.component';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { UploadComponent } from './upload/upload.component';
import { StickyComponent } from './sticky/sticky.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false,
  wheelPropagation: false
};

@NgModule({
  declarations: [ScrollableComponent, NgxToastrComponent, SweetAlertComponent, RangeSliderComponent, DragDropComponent, UploadComponent, StickyComponent, ImageCropComponent, OwlCarouselComponent, NgxDropzoneComponent],
  imports: [
    CommonModule,
    AdvanceRoutingModule,
    Ng5SliderModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    DragulaModule.forRoot(),
    FileUploadModule,
    CarouselModule,
    DropzoneModule,
    PerfectScrollbarModule,
    SharedModule
  ],
  providers: [
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AdvanceModule { }

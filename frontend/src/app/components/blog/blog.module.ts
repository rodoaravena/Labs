import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

@NgModule({
  declarations: [BlogDetailComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

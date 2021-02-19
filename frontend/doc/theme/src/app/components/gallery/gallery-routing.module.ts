import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryDescComponent } from './gallery-desc/gallery-desc.component';
import { MesonryComponent } from './mesonry/mesonry.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';
const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'gallery-grid',
      component: GalleryGridComponent,
      data: {
        title: "Gallery Grid",
        breadcrumb: "Gallery Grid"
      }
    },
    {
      path: 'gallery-desc',
      component: GalleryDescComponent,
      data: {
        title: "Gallery Grid With Desc",
        breadcrumb: "Gallery Grid With Desc"
      }
    },
    {
      path: 'mesonry',
      component: MesonryComponent,
      data: {
        title: "Masonry Gallery",
        breadcrumb: "Masonry Gallery"
      }
    },
    {
      path: 'hover-effect',
      component: HoverEffectComponent,
      data: {
        title: "Hover Effect",
        breadcrumb: "Hover Effect"
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

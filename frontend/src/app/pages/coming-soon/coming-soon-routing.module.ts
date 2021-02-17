import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { PageWithVideoComponent } from './page-with-video/page-with-video.component';
import { PageWithImageComponent } from './page-with-image/page-with-image.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'page',
        component: SimpleComponent
      },
      {
        path: 'page/image',
        component: PageWithImageComponent
      },
      {
        path: 'page/video',
        component: PageWithVideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }

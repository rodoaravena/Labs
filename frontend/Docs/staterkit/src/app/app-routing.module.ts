import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from "./shared/routes/content-routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sample/sample-component',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content
  },
  {
    path: '**',
    redirectTo: '/sample/sample-component'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

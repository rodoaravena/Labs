import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'sample',
    loadChildren: () => import('../../components/sample/sample.module').then(m => m.SampleModule)
  }
];
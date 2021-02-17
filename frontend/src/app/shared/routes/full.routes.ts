import { Routes, RouterModule } from '@angular/router';

export const full: Routes = [
  {
    path: 'error',
    loadChildren: () => import('../../pages/error-pages/error-pages.module').then(m => m.ErrorPagesModule),
  },
  {
    path: 'authentication',
    loadChildren: () => import('../../pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'comingsoon',
    loadChildren: () => import('../../pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: 'maintenance',
    loadChildren: () => import('../../pages/maintenance/maintenance.module').then(m => m.MaintenanceModule),
  }
]
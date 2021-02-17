import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmailComponent } from './email/email.component';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { NgxWizardComponent } from './ngx-wizard.component';
const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'email', component: EmailComponent },
  { path: 'birth-date', component: BirthDateComponent },
  { path: 'form-wizard', redirectTo: '/form-wizard', component: NgxWizardComponent },
  { path: '**', component: NgxWizardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxWizardRoutingModule { }

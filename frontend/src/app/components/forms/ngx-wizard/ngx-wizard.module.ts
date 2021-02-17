import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxWizardRoutingModule } from './ngx-wizard-routing.module';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { RouterModule, Routes } from '@angular/router';
import { NgxWizardComponent } from './ngx-wizard.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    BirthDateComponent,
    NavBarComponent,
    RegistrationComponent,
    NgxWizardComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    NgxWizardRoutingModule,
    ReactiveFormsModule,
    ArchwizardModule
  ],
  exports: [RouterModule]
})
export class NgxWizardModule { }

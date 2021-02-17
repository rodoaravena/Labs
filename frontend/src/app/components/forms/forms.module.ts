import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { FormDefaultComponent } from './form-default/form-default.component';
import { NgxWizardModule } from './ngx-wizard/ngx-wizard.module';

@NgModule({
  declarations: [
    FormValidationComponent,
    BaseInputsComponent,
    CheckboxRadioComponent,
    InputGroupsComponent,
    MegaOptionsComponent,
    FormDefaultComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxWizardModule
  ]
})
export class FormModule { }

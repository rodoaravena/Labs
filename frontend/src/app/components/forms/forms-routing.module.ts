import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { FormDefaultComponent } from './form-default/form-default.component';
import { NgxWizardComponent } from './ngx-wizard/ngx-wizard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'validation',
        component: FormValidationComponent,
        data: {
          title: "Validation",
          breadcrumb: "Validation"
        }
      },
      {
        path: 'inputs',
        component: BaseInputsComponent,
        data: {
          title: "Inputs",
          breadcrumb: "Inputs"
        }
      },
      {
        path: 'checkbox-radio',
        component: CheckboxRadioComponent,
        data: {
          title: "Checkbox-Radio",
          breadcrumb: "Checkbox-Radio"
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: "Input-Groups",
          breadcrumb: "Input-Groups"
        }
      },
      {
        path: 'mega-options',
        component: MegaOptionsComponent,
        data: {
          title: "Mega-Options",
          breadcrumb: "Mega-Options"
        }
      },
      {
        path: 'form-default',
        component: FormDefaultComponent,
        data: {
          title: "Form-Default",
          breadcrumb: "Form-Default"
        }
      },
      {
        path: 'wizard',
        component: NgxWizardComponent,
        data: {
          title: "Ngx-Wizard",
          breadcrumb: "Ngx-Wizard"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

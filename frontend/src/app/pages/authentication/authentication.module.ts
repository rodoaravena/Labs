import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { RegisterComponent } from './register/register.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    LoginComponent,
    LoginWithImageComponent,
    RegisterComponent,
    RegisterWithImageComponent,
    RegisterWithVideoComponent,
    LoginWithVideoComponent,
    UnlockUserComponent,
    ResetPwdComponent,
    ForgetPwdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

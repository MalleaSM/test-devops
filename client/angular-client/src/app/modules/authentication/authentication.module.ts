import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeInputModule } from 'angular-code-input';

import { SharedModule } from '@shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

/**
 * Module declared components
 */
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CompleteRegisterComponent } from './complete-register/complete-register.component';

/**
 * Module for manage the user authentication for the application
 */
@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ConfirmationComponent,
    CompleteRegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    CodeInputModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    ConfirmationComponent,
    CompleteRegisterComponent,
    ForgotPasswordComponent
  ]
})
export class AuthenticationModule { }

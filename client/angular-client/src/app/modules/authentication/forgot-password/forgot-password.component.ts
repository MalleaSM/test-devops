import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Component for forgot password form
 */

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent {

  // Attributes

  /**
   * Reactive Form Group
   */
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  /**
   * getter for email form control
   * @returns {AbstractControl | null}
   */
  get email() { return this.forgotPasswordForm.get('email'); }

  // Methods

  /**
   * get error message for email form field
   * @returns {string}
   */
  getEmailErrorMessage() {
    if (this.email) {
      if (this.email.hasError('required')) {
        return 'You must enter a email';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    return '';
  }

  /**
   * submit the form data
   */
  onSubmit(): void {
    console.warn('forgot password form data', this.forgotPasswordForm.value);
  }

}

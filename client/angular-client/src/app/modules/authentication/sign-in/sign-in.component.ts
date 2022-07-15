import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { userLoggedAttr } from '@env';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Router } from '@angular/router';

/**
 * Component for handle the Sign In data
 */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  // Attributes

  /**
   * Attribute to store the password field input visibility
   */
  hidePassword: boolean = true;

  /**
   * Attribute to store the notification component visibility
   */
  showNotification: boolean = false;

  /**
   * Attribute to store the notification message
   */
  errorMessage: string = '';

  /**
   * Reactive form group 
   */
  signInForm: FormGroup;

  /**
   * getter for username form control
   * @returns {AbstractControl | null }
   */
  get username() { return this.signInForm.get('username'); }

  /**
   * getter for password form control
   * @returns {AbstractControl | null }
   */
  get password() { return this.signInForm.get('password'); }

  constructor(
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Methods

  /**
   * Get the username form control error message
   * @returns {string}
   */
  getUsernameErrorMessage() {
    if (this.username == null) {
      return '';
    }
    let res = ''
    if (this.username.hasError('required')) {
      res = 'You must enter your username';
    }
    return res;
  }

  /**
   * Get the password form control error message
   * @returns {string}
   */
  getPasswordErrorMessage() {
    if (this.password == null) {
      return '';
    }
    let res = '';
    if (this.password.hasError('required')) {
      res = 'You must enter your password';
    }
    return res;
  }

  /**
   * Submit the form data
   */
  onSubmit(): void {
    console.warn('Sign In form data', this.signInForm.value);
    this.authService.signIn(this.signInForm.value)
      .subscribe(
        response => {
          this.localStorageService.setItem(userLoggedAttr, true);
          this.localStorageService.setItem('user', response);
          this.router.navigate(['/contacts/list']);
        },
        err => {
          this.showNotification = true;
          this.errorMessage = err.error;
          this.signInForm.controls['password'].reset();
        }
      );
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authenticationService/authentication.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

/**
 * Component for handle the Sign Up email registration process
 */
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  /**
   * Reactive form group 
   */
  signUpForm: FormGroup;

  /**
   * getter for username form control
   * @returns {AbstractControl | null }
   */
  get username() { return this.signUpForm.get('username'); }

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email])
    });
  }

  /**
   * Get the email form control error message
   * @returns {string}
   */
  getEmailErrorMessage() {
    if (this.username) {
      if (this.username.hasError('required')) {
        return 'You must enter a email';
      }
      return this.username.hasError('email') ? 'Not a valid email' : '';
    }
    return '';
  }

  /**
   * Submit the form data
   */
  onSubmit(): void {
    // Complete the integration with service here
    this.localStorageService.setItem("email",this.signUpForm.value.username);
    this.authService.saveUser(this.signUpForm.value.username).subscribe(userData =>{
      this.router.navigate(['/authentication/confirmation']);
    })
  }

}

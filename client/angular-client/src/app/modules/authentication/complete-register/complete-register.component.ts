import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authenticationService/authentication.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

import { passwordMinLength, usernameMinLength, userLoggedAttr } from '@env';

/**
 * Component for handle the Sign Up complete data registration process
 */
@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.css']
})
export class CompleteRegisterComponent {

  // Attributes
  /**
   * Attribute to store the password field input visibility
   */
  hidePassword: boolean = true;

  /**
   * Reactive form group 
   */
  completeRegisterForm: FormGroup;

  /**
   * getter for username form control
   * @returns {AbstractControl | null }
   */
  get username() { return this.completeRegisterForm.get('username'); }

  /**
   * getter for password form control
   * @returns {AbstractControl | null }
   */
  get password() { return this.completeRegisterForm.get('password'); }

  /**
   * getter for fullName form control
   * @returns {AbstractControl | null }
   */
  get fullName() {return this.completeRegisterForm.get('fullName'); }

   /**
   * getter for email form control
   * @returns {AbstractControl | null }
   */
  get email() {return this.completeRegisterForm.get('fullName'); }

  constructor(
    private authService: AuthenticationService, 
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.completeRegisterForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(usernameMinLength)]),
      password: new FormControl('', [Validators.required, Validators.minLength(passwordMinLength)]),
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
    if (this.username.hasError('required')) {
      return 'You must enter a username';
    }
    return this.username.hasError('minlength') ? 'username has contain at least ' + usernameMinLength + ' characters' : '';
  }
  /**
   * Get the password form control error message
   * @returns {string}
   */
  getPasswordErrorMessage() {
    if (this.password == null) {
      return '';
    }

    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return this.password.hasError('minlength') ? 'password has contain at least ' + passwordMinLength + ' characters' : '';
  }

  getFullNameErrorMessage() {
    if (this.username == null) {
      return '';
    }
      return 'You must enter your Full Name';
  }

  /**
   * Submit the form data
   */
  onSubmit(): void {
    // Complete the integration with backend here
    const completeForm = {
      fullName: this.completeRegisterForm.value.fullName,
      username: this.completeRegisterForm.value.username,
      password: this.completeRegisterForm.value.password,
      email: this.localStorageService.getItem("email")
    }

    console.log(completeForm);
    this.authService.createUser(completeForm).subscribe((userData:any)=>{
      this.localStorageService.setItem("userId",userData.id);
      this.localStorageService.setItem(userLoggedAttr, true);
      this.localStorageService.removeItem("email");
      this.router.navigate(['/contacts/list']);
    })
    // this.localStorageService.setItem(userLoggedAttr, true);
    // this.router.navigate(['/contacts/list']);
  }

}

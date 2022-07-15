import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authenticationService/authentication.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

/**
 * Component for handle the Sign Up code verification process
 */
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  // Attributes

  /**
   * Attribute to store the notification component visibility
   */
  showNotification = false;

  /**
   * Attribute to store the notification message
   */
  errorMessage = '';

  /**
   * Attribute for the code length
   */
  codeLength = 6;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private localStotageService: LocalStorageService
  ) { }

  // Methods

  /**
   * Called every time when user changed the code
  */
  onCodeChanged(code: string) {
    this.showNotification = false;
  }

  /**
   * called only if user entered full code
  */
  onCodeCompleted(code: string) {
    this.router.navigate(['/authentication/complete-register']);
  }

}

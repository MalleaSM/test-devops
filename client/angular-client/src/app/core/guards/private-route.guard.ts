import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@authenticationService/authentication.service';

/**
 * Guard for protect the routes that needs authentication
 */
@Injectable({
  providedIn: 'root'
})
export class PrivateRouteGuard implements CanActivate {

  constructor() { }

  /**
   * Check if the user is logged
   */
  canActivate() {
    // Implement the user logged validation in case is not logged redirecto to the route "/authentication/signin"
    return true;
  }

}

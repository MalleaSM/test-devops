import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

import IUser from '@shared/models/user.model';
import { API_SERVICE_URL, userLoggedAttr } from '@env';

const httpOptionsText = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  responseType: "text" as "json"
};

/**
 * Service for user authentification
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  /**
   * Save the user
   * @param {IUser} user - User information
   * @returns {Observable}
   */
  saveUser(user: any): Observable<any> {
    return this.http.get<any>(`${API_SERVICE_URL}/registration/code/${user}`);
  }

    /**
   * Update the user
   * @param {IUser} user - User information
   * @returns {Observable}
   */
     createUser(user: IUser): Observable<IUser> {
      return this.http.post<IUser>(`${API_SERVICE_URL}/users/`, user);
    }
  
  /**
   * Update the user
   * @param {IUser} user - User information
   * @returns {Observable}
   */
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${API_SERVICE_URL}/users/`, user);
  }

  /**
   * Confirm the code for Sign Up
   * @param {string} code - code to be verified
   * @returns {Observable}
   */
  confirmUserCode(code: string): Observable<string> {
    return this.http.get<string>(`${API_SERVICE_URL}/registration/${code}`);
  }

  /**
   * Sign in a user
   * @param {IUser} user - User information
   * @returns {Observable}
   */
  signIn(user: IUser): Observable<any> {
    return this.http.post<any>(`${API_SERVICE_URL}/authentication/login`, user);
  }

  /**
   * Check if the user is already logged
   * @returns {boolean}
   */
  isLogged(): boolean {
    return this.localStorageService.getItem(userLoggedAttr);
  }

  /**
   * Logout a user
   */
  logout(token: string ):  Observable<any>  {
    return this.http.get<string>(`${API_SERVICE_URL}/authentication/logout/${token}`);
  }

}

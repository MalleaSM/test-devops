import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import IContact from '@shared/models/contact.model';
import { API_SERVICE_URL } from '@env';

/**
 * Service for Contacts feature
 */
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Save a new contact
   * @param {IContact} contact - Contact Object
   * @returns {Observable}
   */
  saveContact(contact: IContact): Observable<IContact> {
    return this.http.post<IContact>(`${API_SERVICE_URL}/contacts`, contact);
  }

  /**
   * Retrieve all the contacts
   * @returns {Observable}
   */
  getContacts(): Observable<Array<IContact>> {
    return this.http.get<Array<IContact>>(`${API_SERVICE_URL}/contacts/`);
  }

  /**
   * Get a contact object for id 
   * @param {string} contactId - the contact id attribute
   * @returns {Observable}
   */
  getContactById(contactId: string): Observable<IContact> {
    return this.http.get<IContact>(`${API_SERVICE_URL}/contacts/${contactId}`);
  }

}

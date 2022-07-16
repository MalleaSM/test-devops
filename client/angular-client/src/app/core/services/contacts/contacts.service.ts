import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import IContact from '@shared/models/contact.model';
import { API_SERVICE_URL } from '@env';
import IMessage from '@shared/models/message.model';

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
    return this.http.post<IContact>(`${API_SERVICE_URL}/contact`, contact);
  }

  /**
   * Retrieve all the contacts
   * @returns {Observable}
   */
  getContacts(userId:number): Observable<Array<IContact>> {
    return this.http.get<Array<IContact>>(`${API_SERVICE_URL}/users/${userId}`);
  }

  /**
   * Get a contact object for id 
   * @param {string} contactId - the contact id attribute
   * @returns {Observable}
   */
  getContactById(contactId: number): Observable<IContact> {
    return this.http.get<IContact>(`${API_SERVICE_URL}/contact/${contactId}`);
  }

  getContactByEmail(contactEmail: string, id:number){
    return this.http.get<IContact>(`${API_SERVICE_URL}/contact/${id}/exists/${contactEmail}`)
  }

    /**
   * Send a message
   * @param {IMessage} message - Contact Object
   * @returns {Observable}
   */
  sendMessageToContact(message: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>(`${API_SERVICE_URL}/message`, message);
  }

  sentMessages(sendId:number){
    return this.http.get<IContact>(`${API_SERVICE_URL}/message/sender/${sendId}`)
  }


}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '@services/contacts/contacts.service';

import { AddContactDialogComponent } from '@contacts/add-contact-dialog/add-contact-dialog.component';
import IMenu from '@shared/models/menu.model';
import IContact from '@shared/models/contact.model';

/**
 * Component for handle the Contact List Page
 */
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  // Attributes

  /**
   * Attribute for store the menus for Contact module
   */
  menus: Array<IMenu>;

  /**
   * Attribute to store the contacts data
   */
  contacts: Array<IContact>;

  constructor(
    public dialog: MatDialog,
    private contactsService: ContactsService,
  ) {
    this.menus = [
      {
        id: '1',
        title: 'Contacts',
        navigate: '/contacts/list',
        icon: 'list'
      }
    ];
    this.contacts = [];
  }

  /**
   * On Init the component
   */
  ngOnInit(): void {
    this.loadContacts();
  }

  /**
   * load the contacts data from service
   */
  loadContacts(): void {
  }

  /**
   * show the dialog for add contact
   */
  public showDialog(): void {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '500px',
      data: {
        title: 'Add Contact',
        yesButton: 'Add Contact'
      }
    });
    // Complete here the add contact feature

  }

}

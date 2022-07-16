import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Importing shared module
 */
import { SharedModule } from '@shared/shared.module';

/**
 * Module declared components
 */
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ContactsMessageSendedComponent } from './contacts-message-sended/contacts-message-sended.component';


/**
 * feature module for Contacts
 */
@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsTableComponent,
    AddContactDialogComponent,
    SendMessageComponent,
    ContactsMessageSendedComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ],
  exports: [
    ContactsListComponent,
    ContactsTableComponent,
    AddContactDialogComponent
  ],
  entryComponents: [
    AddContactDialogComponent
  ],
})
export class ContactsModule { }

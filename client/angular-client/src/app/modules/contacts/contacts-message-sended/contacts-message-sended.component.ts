import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '@services/contacts/contacts.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import IMenu from '@shared/models/menu.model';

@Component({
  selector: 'app-contacts-message-sended',
  templateUrl: './contacts-message-sended.component.html',
  styleUrls: ['./contacts-message-sended.component.css']
})
export class ContactsMessageSendedComponent implements OnInit {

  menus: Array<IMenu>;
  contacts: any = [];
  messages: any = [];
  displayedColumns: string[] = ['Message', 'sent to:'];
  
  constructor(
    private contactsService: ContactsService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
    this.menus = [
      {
        id: '1',
        title: 'Contacts',
        navigateList: '/contacts/list',
        navigateSent: '/contacts/sent',
        icon: 'list'
      }
    ];
   }

  ngOnInit(): void {
    this.isLogged();
  }
  isLogged(){
    if(!this.localStorageService.getItem("userLogged")){
     this.router.navigate(['/']);
   }
   else{
    this.loadMessagesSent();
   }
 }

  loadMessagesSent(){
    const userId = parseInt(this.localStorageService.getItem("userId"));
    this.contactsService.sentMessages(userId).subscribe((data:any) => {
      this.messages = data;
      let counter = 0;
      data.forEach((element:any) => {
        this.contactsService.getContactById(element.receiverId).subscribe((contactData:any)=>{
          const messageInfo = {
            content: data[counter].content,
            receiver: contactData.email
          }
          this.contacts.push(messageInfo);
          counter++;
        });
      });
    })
  }
}

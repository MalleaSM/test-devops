import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from '@services/contacts/contacts.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  
  messageForm: FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<SendMessageComponent>,
    private contactsService: ContactsService,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder
  ) { 
    this.dialogRef.disableClose = true;
    this.messageForm = this.formBuilder.group({
      message: ['',Validators.required],
    })
  }

  get message(){
    return this.messageForm.get('message');
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.localStorageService.removeItem("contactId");
    this.dialogRef.close();
  }
  onSubmit(): void {
      const messageData = {
        content: this.messageForm.value.message,
        receiverId: parseInt(this.localStorageService.getItem("contactId")),
        senderId: parseInt(this.localStorageService.getItem("userId")),
      }
      console.log(messageData);
     this.contactsService.sendMessageToContact(messageData).subscribe(data => {}); 
      
      
      this.dialogRef.close();
  }
}

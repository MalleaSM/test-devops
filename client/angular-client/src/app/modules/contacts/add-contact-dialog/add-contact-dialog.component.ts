import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { usernameMinLength } from '@env';
import { ContactsService } from '@services/contacts/contacts.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import IDialogData from '@shared/models/dialog-data.model';
import IContact from '@shared/models/contact.model';

/**
 * Component for handle add contact form
 */
@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.css']
})
export class AddContactDialogComponent {

  // Attributes
  contactForm: FormGroup;
  saveContactButton = true;
  emailExistsMessage: any =  null;

  contacts: Array<IContact>;

  constructor(
    private dialogRef: MatDialogRef<AddContactDialogComponent>,
    private contactsService: ContactsService,
    private localStorageService: LocalStorageService,


    @Inject(MAT_DIALOG_DATA)
    public dialogData: IDialogData,
    private formBuilder: FormBuilder
  ) {
    this.dialogRef.disableClose = true;
    this.contactForm = this.formBuilder.group({
      email: ['',Validators.required],
      contactName: ['', Validators.required]
    })
    this.contacts = [];
  }

  // Methods
  get email(){
    return this.contactForm.get('email');
  }
  get contactName(){
    return this.contactForm.get('contactName');
  }
  
  getEmailErrorMessage() {
    if (this.email) {
      if (this.email.hasError('required')) {
        return 'You must enter a email';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    return '';
  }
  getUsernameErrorMessage(){
    if (this.contactName) {
      if (this.contactName.hasError('required')) {
        return 'You must enter a contact name';
      }
    }
    return '';
  }
  checkEmailExists(){
    this.contactsService.getContactByEmail(this.contactForm.value.email,parseInt(this.localStorageService.getItem("userId"))).subscribe((contactExists:any)=>{
      console.log(contactExists.response);
     if(!contactExists.response){
      console.log("no existe");
      this.emailExistsMessage = false;
      this.saveContactButton = false;
     }
     else{
      console.log("existe");
       this.emailExistsMessage = true;
       this.saveContactButton = true;
     }
    })
  }

  /**
   * Call when the cancel button is performed
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Submit the form data
   */
  onSubmit(): void {
    // Complete here the add contact feature
    const contact = {
      userId: parseInt(this.localStorageService.getItem("userId")),
      name:this.contactForm.value.contactName,
      email:this.contactForm.value.email,
    }
    this.contactsService.saveContact(contact).subscribe( register=>({}));
    this.dialogRef.close();
    window.location.reload();
  }

  
}

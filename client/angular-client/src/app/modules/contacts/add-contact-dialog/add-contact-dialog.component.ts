import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { usernameMinLength } from '@env';
import { ContactsService } from '@services/contacts/contacts.service';
import IDialogData from '@shared/models/dialog-data.model';

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
    
  constructor(
    private dialogRef: MatDialogRef<AddContactDialogComponent>,
    private contactsService: ContactsService,

    @Inject(MAT_DIALOG_DATA)
    public dialogData: IDialogData,
    private formBuilder: FormBuilder
  ) {
    this.dialogRef.disableClose = true;
    this.contactForm = this.formBuilder.group({
      email: ['',Validators.required],
      contactName: ['', Validators.required]
    })
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
    console.log("Verificar con el backend")
    // this.contactsService.getContacts().subscribe((contactsSData:any) =>{
    //   console.log(contactsSData);
    //   contactsSData.forEach((element:any) => {
    //     if(element.email == this.contactForm.value.email){
    //       this.saveContactButton = false;
    //     }
    //     else{
    //       this.saveContactButton = true;
    //     }
    //   });
    // })
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
    console.log(this.contactForm.value);
    // this.contactsService.saveContact(this.contactForm.value).subscribe( x=>({
    // }))
  }

}

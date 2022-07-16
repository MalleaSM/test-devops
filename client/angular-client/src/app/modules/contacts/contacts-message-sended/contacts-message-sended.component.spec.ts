import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsMessageSendedComponent } from './contacts-message-sended.component';

describe('ContactsMessageSendedComponent', () => {
  let component: ContactsMessageSendedComponent;
  let fixture: ComponentFixture<ContactsMessageSendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsMessageSendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsMessageSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

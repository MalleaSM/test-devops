import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Component for display a animated notification
 * Just implemented error notifications, It can be expanded for handle warning and information types
 */

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.css'],
  animations: [
    trigger('notificationState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ])
  ]
})
export class FormNotificationComponent {

  // Attributes

  /**
   * Input attribute for title
   */
  @Input() title: string;

  /**
   * Input attribute for show the notification
   */
  @Input() show: boolean;

  /**
   * Output attribute for emit changes for the show attribute
   */
  @Output() updateShow = new EventEmitter<boolean>();


  /**
   * getter for state to dispatch the animation
   */
  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  constructor() {
    this.title = '';
    this.show = false;
  }

  // Methods

  /**
   * Hide the notification
   */
  hideNotification() {
    this.updateShow.emit(false);
  }

}

import { Component, Input } from '@angular/core';

/**
 * Component for display header text for Forms
 */

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html'
})
export class FormHeaderComponent {

  // Attributes

  /**
   * Input attribute for title value
   */
  @Input() title: string;

  constructor() {
    this.title = '';
  }

}

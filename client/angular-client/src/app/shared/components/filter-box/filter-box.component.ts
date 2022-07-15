import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * Component for filter box input
 */

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent {

  // Attributes

  /**
   * Output for emit input changes
   */
  @Output() dataEvent = new EventEmitter();

  /**
   * String for store filter value
   */
  filterValue: String;

  constructor() {
    this.filterValue = '';
  }

  // Methods

  /**
   * clear filter input value
   */
  clear(): void {
    this.filterValue = '';
    this.dataEvent.emit(this.filterValue);
  }

  /**
   *  method called when keyUp event is dispatched
   */
  onChange(): void {
    this.dataEvent.emit(this.filterValue);
  }

}

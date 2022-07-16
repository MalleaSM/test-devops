import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendMessageComponent } from '@contacts/send-message/send-message.component';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import IContact from '@shared/models/contact.model';

/**
 * Component for handle the data in a table component
 */
@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {

  // Attributes

  /**
   * Input attribute to pass data source
   */
  @Input() dataSource: Array<IContact>;

  /**
   * Attribute for the data source for the table component
   */
  tableDataSource: Array<IContact>;


  displayedColumns: string[];

  constructor(
    public dialog: MatDialog,
    private localStorageService: LocalStorageService,
  ) {
    this.dataSource = [];
    this.tableDataSource = [];
    this.displayedColumns = ['userId', 'name', 'email','action'];
  }

  /**
   * method called when a proepty changes the state
   */
  ngOnChanges() {
    this.tableDataSource = this.dataSource.sort((a: IContact, b: IContact) => {
      if (a.id && b.id) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      }
      return 0
    });
  }
  public messageDialog(id: number): void {
    const dialogRef = this.dialog.open(SendMessageComponent, {
      width: '500px',
    });
    console.log(id);
    this.localStorageService.setItem("contactId",id);
  }

  /**
   * Perform the filter for the data source
   * @param {string} filterValue - text value for apply the filtering
   */
  applyFilter(filterValue: string) {
    this.tableDataSource = this.dataSource.filter(c => c.name.indexOf(filterValue) != -1 || c.email.indexOf(filterValue) != -1);
  }
}

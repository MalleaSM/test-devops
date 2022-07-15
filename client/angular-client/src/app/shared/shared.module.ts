import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material UI Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

/**
 * Module declared components
 */
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { FormNotificationComponent } from './components/form-notification/form-notification.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { CenteredContainerComponent } from './components/centered-container/centered-container.component';

/**
 * This module exposes all the components to be used along the application
 * It can be imported in the feature modules
 */
@NgModule({
  declarations: [
    FormHeaderComponent,
    FormNotificationComponent,
    NavComponent,
    FilterBoxComponent,
    CenteredContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    FormHeaderComponent,
    FormNotificationComponent,
    NavComponent,
    FilterBoxComponent,
    CenteredContainerComponent
  ]
})
export class SharedModule { }

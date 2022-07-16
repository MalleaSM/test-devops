import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRouteGuard } from 'app/core/guards/private-route.guard';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsMessageSendedComponent } from './contacts-message-sended/contacts-message-sended.component';

const routes: Routes = [
  { path: 'sent', component: ContactsMessageSendedComponent, canActivate: [PrivateRouteGuard] },
  { path: 'list', component: ContactsListComponent, canActivate: [PrivateRouteGuard] },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

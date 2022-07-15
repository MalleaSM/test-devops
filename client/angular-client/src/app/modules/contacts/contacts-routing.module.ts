import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRouteGuard } from 'app/core/guards/private-route.guard';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [
  { path: 'list', component: ContactsListComponent, canActivate: [PrivateRouteGuard] },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

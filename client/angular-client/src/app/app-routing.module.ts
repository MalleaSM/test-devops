import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoMatchComponent } from './modules/landing/no-match/no-match.component';
import { HomeComponent } from './modules/landing/home/home.component';

const routes: Routes = [
  { path: 'authentication', loadChildren: () => import('@authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: 'contacts', loadChildren: () => import('@contacts/contacts.module').then(c => c.ContactsModule)},
  { path: '', component: HomeComponent},
  { path: '**', component: NoMatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

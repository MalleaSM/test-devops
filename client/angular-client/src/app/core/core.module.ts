import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { PrivateRouteGuard } from './guards/private-route.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
  , providers: [
    AuthenticationService,
    LocalStorageService,
    PrivateRouteGuard
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

/**
 * Importing shared module
 */
import { SharedModule } from '@shared/shared.module';

/**
 * Module declared components
 */
import { LandingRoutingModule } from './landing-routing.module';
import { NoMatchComponent } from './no-match/no-match.component';

/**
 * Feature module for Landing page
 */
@NgModule({
  declarations: [
    HomeComponent,
    NoMatchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ],
  exports: [
    HomeComponent,
    NoMatchComponent
  ]
})
export class LandingModule { }

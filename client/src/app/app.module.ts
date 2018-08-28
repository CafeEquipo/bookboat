import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material'
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { StartTripComponent } from './components/start-trip/start-trip.component';
import { EndTripComponent } from './components/end-trip/end-trip.component';

import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './routing';
import { StartPageComponent } from './components/start-page/start-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NewBookingComponent,
    StartTripComponent,
    EndTripComponent,
    StartPageComponent
  ],
  imports: [
    MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule,
    MatSelectModule, BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

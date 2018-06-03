import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule } from '@angular/material'
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { StartTripComponent } from './components/start-trip/start-trip.component';
import { EndTripComponent } from './components/end-trip/end-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookingComponent,
    StartTripComponent,
    EndTripComponent
  ],
  imports: [
    MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

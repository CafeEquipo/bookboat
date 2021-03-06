import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

<<<<<<< HEAD
import  {initializer}  from './utils/app-init';

import { MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule, MatSelectModule } from '@angular/material'
=======
import { MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material'
>>>>>>> 6f5e494b8cc27e9f7264b963f8029e99d4ce7a24
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { StartTripComponent } from './components/start-trip/start-trip.component';
import { EndTripComponent } from './components/end-trip/end-trip.component';

import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './routing';
import { StartPageComponent } from './components/start-page/start-page.component'
//import { AppAuthGuard } from './utils/auth-guard';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NewBookingComponent,
    StartTripComponent,
    EndTripComponent,
    StartPageComponent
  ],
  imports: [
    HttpClientModule,
    MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule,
    MatSelectModule, BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

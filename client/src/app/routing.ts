import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { StartTripComponent } from './components/start-trip/start-trip.component';
import { EndTripComponent } from './components/end-trip/end-trip.component';
import { StartPageComponent } from './components/start-page/start-page.component'

export const appRoutes: Routes = [
    { path:'', redirectTo: 'index', pathMatch: 'full'} 
    { path: 'index', component: StartPageComponent },
    { path: 'new', component: NewBookingComponent },
    { path: 'start', component: StartTripComponent },
    { path: 'end', component: EndTripComponent}
  ];
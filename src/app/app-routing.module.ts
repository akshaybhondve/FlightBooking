import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { DiscountComponent } from './discount/discount.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'add-airline', component: AddAirlineComponent},
  {path: 'manage-airlines', component:ManageAirlinesComponent},
  {path: 'admin', component:AdminNavbarComponent},
  {path: 'user', component:UserNavbarComponent},
  {path: 'book-flight', component:BookFlightComponent},
  {path: 'manage-bookings', component:ManageBookingsComponent},
  {path: 'booking-history', component:BookingHistoryComponent},
  {path: 'add-discount', component:DiscountComponent},
  {path: 'add-ticket', component:AddTicketComponent},
  {path: 'add-flight', component:AddFlightComponent},
  {path: 'manage-flight', component:ManageFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AddAirlineComponent,
  ManageAirlinesComponent,
  AdminNavbarComponent,
  UserNavbarComponent,
  BookFlightComponent,
  ManageBookingsComponent,
  BookingHistoryComponent,
  DiscountComponent,
  LoginComponent,
  RegistrationComponent,
  AddTicketComponent,
  ManageFlightComponent,
  AddFlightComponent
]

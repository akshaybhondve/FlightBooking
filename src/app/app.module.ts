import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ReactiveFormsModule } from '@angular/forms';
import AirlineService from './Services/AirlineService';
import BookFlightService from './Services/BookFlightService';
import DiscountService from './Services/DiscountService';
import RegistrationService from './Services/RegistrationService';
import TicketService from './Services/TicketService';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AirlineService,BookFlightService,DiscountService,RegistrationService,TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

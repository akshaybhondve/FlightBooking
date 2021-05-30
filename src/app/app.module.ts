import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import AirlineService from './AirlineService';
import BookFlightService from './Services/bookFlightService';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AirlineService,BookFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }

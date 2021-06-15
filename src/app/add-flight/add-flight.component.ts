import { Component, OnInit } from '@angular/core';
import Airline from '../Entity/Airline';
import Flight from '../Entity/Flight';
import AirlineService from '../Services/AirlineService';
import FlightService from '../Services/FlightService';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightService: FlightService, private airlineService:AirlineService) { }
  flight:Flight = new Flight();
  flights:Flight[]=[];
  airlines:Airline[]=[];

  ngOnInit(): void {
    const promoise = this.airlineService.getAirLines()
    promoise.subscribe((response)=>{
      console.log(response);
      this.airlines = response as Airline[];
    },
    function(error){
      alert(error.message);
    });
  }

  saveFlight(){
    console.log("saved "+this.flight.fromLocation);
    const promise = this.flightService.saveFlights(this.flight);
    promise.subscribe(function(response){
      console.log(response);
      alert('Flight Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }

  getAirlineName(value:string){
    console.log("the selected value is " + value);
    alert(value);
  }

  clearForm(){
    this.flight.airline_name="";
    this.flight.fromLocation="";
    this.flight.toLocation="";
  }

}

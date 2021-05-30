import { Component, OnInit } from '@angular/core';
import AirlineService from '../Services/AirlineService';
import Airline from '../Entity/Airline';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent{

  constructor(private airlineService:AirlineService) { }
  airline:Airline = new Airline();
  airlines:Airline[]=[];

  save(){
    console.log("saved "+this.airline.airlineName);
    const promise = this.airlineService.save(this.airline);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }

}

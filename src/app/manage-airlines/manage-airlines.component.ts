import { Component, OnInit } from '@angular/core';
import AirlineService from '../Services/AirlineService';
import Airline from '../Entity/Airline';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  constructor(private airlineService:AirlineService){}
  title = '';
  airlines:Airline[]=[];

  ngOnInit(): void {
    const promise=this.airlineService.getAirLines();
    promise.subscribe((response)=>{
      console.log();
      this.airlines=response as Airline[];
    })
  }

}

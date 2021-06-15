import { Component, OnInit } from '@angular/core';
import ScheduleFlight from '../Entity/ScheduleFlight';
import ScheduleFlightService from '../Services/ScheduleFlightService';

@Component({
  selector: 'app-manage-schedule-flight',
  templateUrl: './manage-schedule-flight.component.html',
  styleUrls: ['./manage-schedule-flight.component.css']
})
export class ManageScheduleFlightComponent implements OnInit {

  constructor(private scheduleService: ScheduleFlightService, public schedule:ScheduleFlight) { }
  schedules:ScheduleFlight[]=[];

  ngOnInit(): void {
    const promoise = this.scheduleService.getAllScheduleFlights();
    promoise.subscribe((response)=>{
      console.log(response);
      this.schedules = response as ScheduleFlight[];
    },
    function(error){
      alert(error.message);
    });
  }

}

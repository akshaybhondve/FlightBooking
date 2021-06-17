import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ScheduleFlight from '../Entity/ScheduleFlight';
import ScheduleFlightService from '../Services/ScheduleFlightService';

@Component({
  selector: 'app-manage-schedule-flight',
  templateUrl: './manage-schedule-flight.component.html',
  styleUrls: ['./manage-schedule-flight.component.css']
})
export class ManageScheduleFlightComponent implements OnInit {

  constructor(private route:Router,private scheduleService: ScheduleFlightService, public schedule:ScheduleFlight) { }
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

  updateScheduledFlightStatus(schedule_id:number,status:string){
    const promoise = this.scheduleService.updateScheduledFlightStatus(schedule_id,status);
    promoise.subscribe((response)=>{
      this.schedule = response as ScheduleFlight;
      alert("Flight has been "+this.schedule.status);
      this.route.navigate(['/manage-airlines']);
    },
    function(error){
      alert(error.message);
    });
  }

}

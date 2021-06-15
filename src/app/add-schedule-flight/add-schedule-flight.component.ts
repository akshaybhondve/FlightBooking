import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ScheduleFlight from '../Entity/ScheduleFlight';
import ScheduleFlightService from '../Services/ScheduleFlightService';

@Component({
  selector: 'app-add-schedule-flight',
  templateUrl: './add-schedule-flight.component.html',
  styleUrls: ['./add-schedule-flight.component.css']
})
export class AddScheduleFlightComponent implements OnInit {

  constructor(private scheduleService: ScheduleFlightService, private route: ActivatedRoute,private router:Router) { }
  schedules:ScheduleFlight[]=[];
  schedule:ScheduleFlight=new ScheduleFlight();

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.schedule.airline_name = params['airline_name'];
      this.schedule.from_location = params['fromLocation'];
      this.schedule.to_location =params['toLocation'];
    });
  }

  saveScheduleFlight(){
    console.log("saved "+this.schedule.from_location);
    const promise = this.scheduleService.saveScheduleFlights(this.schedule);
    promise.subscribe((response)=>{
      console.log(response);
      alert('Flight Saved Successfully');
      this.router.navigate(['/manage-schedule-flight'])
    },
    function(error){
      alert(error.message);
    });
  }

  clearForm(){
    this.schedule.airline_name="";
    this.schedule.from_location="";
    this.schedule.to_location="";
    this.schedule = new ScheduleFlight();
  }
}

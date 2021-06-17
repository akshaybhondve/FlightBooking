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
      this.schedule.fromLocation = params['fromLocation'];
      this.schedule.toLocation =params['toLocation'];
      this.schedule.flight_id =params['flight_id'];
    });
  }

  saveScheduleFlight(){
    console.log("saved "+this.schedule.fromLocation);
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

  onOnwrdDate:any="";
  getOnwardDate(){
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate < 10){
      toDate = '0'+toDate;
    }

    var month = date.getMonth()+1;
    if(month < 10){
      month = '0'+month;
    }
    var year = date.getFullYear();
    this.onOnwrdDate = toDate+"-"+month+"-"+year;
    this.schedule.flight_date = this.onOnwrdDate;
  }

  clearForm(){
    this.schedule.airline_name="";
    this.schedule.fromLocation="";
    this.schedule.toLocation="";
    this.schedule = new ScheduleFlight();
  }
}

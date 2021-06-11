import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entity/User';
import RegistrationService from '../Services/RegistrationService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg="";
  constructor(public registrationService:RegistrationService,private route:Router) { }

  ngOnInit(): void {
  }

  registrationUser(){
    this.registrationService.registerUser(this.user).subscribe(
      data=>{
        console.log("response received");
        this.route.navigate([''])
        
    },
      error=>{
        console.log("exception occured");
        this.msg="Error in Saving User";
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Entity/User';
import RegistrationService from '../Services/RegistrationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg="";
  constructor(public registrationService:RegistrationService,private route:Router) { }

  ngOnInit(): void {


  }

  loginUser(){
    this.registrationService.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        if(data.isAdmin){
          this.route.navigate(['/admin'])
        }else{
          this.route.navigate(['/user'])
        }
    },
      error=>{
        console.log("exception occured");
        this.msg="Bad credentials, Please enter valid email id and password";
      }
    )
  }
}

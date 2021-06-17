import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../Entity/User";

const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingAdmin/"

@Injectable()
export default class RegistrationService{

    constructor(private http:HttpClient){ }

    public loginUserFromRemote(user:User):Observable<any>{
        return this.http.post<any>(BASE_URL+'login',user);
    }

    public registerUser(user:User):Observable<any>{
        return this.http.post<any>(BASE_URL+'registration',user);
    }

    public getUser(email:string):Observable<any>{
        return this.http.get<any>(BASE_URL+`register-${email}`);
    }

    
    
}
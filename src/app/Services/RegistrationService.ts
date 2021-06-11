import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../Entity/User";

const BASE_URL="http://localhost:9090/"

@Injectable()
export default class RegistrationService{

    constructor(private http:HttpClient){ }

    public loginUserFromRemote(user:User):Observable<any>{
        return this.http.post<any>(BASE_URL+'login',user);
    }

    public registerUser(user:User):Observable<any>{
        return this.http.post<any>(BASE_URL+'registration',user);
    }

    
    
}
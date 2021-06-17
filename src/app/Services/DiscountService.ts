import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookFlight from "../Entity/BookFlight";
import Discount from "../Entity/Discount";
import { Observable } from 'rxjs';

const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingAdmin/api_v1/"

@Injectable()
export default class DiscountService{
    constructor(private http:HttpClient){ }

    getAllDiscounts(){
        return this.http.get(BASE_URL+'discounts');
    }

    saveDiscount(discount:Discount) {
        console.log(discount);
        return this.http.post(BASE_URL+'save-discount',discount);
    }

    getDiscountByCode(code:string) {
        console.log(code);
        return this.http.get(BASE_URL+`code-${code}`);
    }
    
}
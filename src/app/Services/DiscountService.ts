import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookFlight from "../Entity/BookFlight";
import Discount from "../Entity/Discount";
import { Observable } from 'rxjs';

const BASE_URL="http://localhost:9090/api_v1/"

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
    
}
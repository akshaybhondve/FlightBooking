import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookFlight from "../Entity/BookFlight";
import Discount from "../Entity/Discount";
const BASE_URL="http://localhost:3000/discounts"

@Injectable()
export default class DiscountService{
    constructor(private http:HttpClient){ }

    getAllDiscounts(){
        return this.http.get(BASE_URL);
    }

    saveDiscount(discount:Discount) {
        console.log(discount);
        return this.http.post(BASE_URL,discount,{
            headers:{
                "content-type":"application/json"
            }
        })
    }
}
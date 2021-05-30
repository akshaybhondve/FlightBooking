import { Component, OnInit } from '@angular/core';
import Discount from '../Entity/Discount';
import DiscountService from '../Services/DiscountService';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private discountService:DiscountService) { }
  discount:Discount = new Discount();
  discounts:Discount[]=[];

  ngOnInit(): void {
  }

  saveDiscount(){
    console.log("saved "+this.discount.discountCode);
    const promise = this.discountService.saveDiscount(this.discount);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }
}

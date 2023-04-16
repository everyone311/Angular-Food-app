import { Component } from '@angular/core';
import { FoodDetailsService } from '../food-details.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
})
export class ViewFoodsComponent {
  getFoods: any[] = [];
  filteredItems: any[] = [];
  constructor(private _getFoods: FoodDetailsService, private fb:FormBuilder) {
    this.getFoods = _getFoods.getFoods();
    this.filteredItems = this.getFoods;
  }

  filterByCategory(value: string) {
    console.log('Desserts clicked');
    if (value === 'All') {
      this.filteredItems = this.getFoods;
    } else {
      this.filteredItems = this.getFoods.filter(
        (food) => food.category === value
      );
      console.log('...', this.filteredItems);
    }
  }

  getPrice(value:any)
  {
    console.log("button is clicked");
    console.log(value.target.value);

  }
  cartVisible:boolean = false;
  getCart()
  {
    this.cartVisible = true;
  }
  cartDisable()
  {
    return this.cartVisible = false;
  }

  CartArray:any[] = [];

  SelectedItem = 0;
  addToCart(val:any)
  {
    // alert("Item is added to the cart");
    this.CartArray.push( val );
    this.SelectedItem = this.CartArray.length;
  }

  amount = 0;
  totalAmount = 0
  addBtn(a:any,b:number,c:number)
  {
    if(a.qty!=6)
    {
      a.qty+= 1;
    }
    this.amount = b * c ;

    this.totalAmount =  this.amount; 

  }

  subBtn(a:any,b:number,c:number)
  {
    if(a.qty != 1)
    {
      a.qty -= 1;
    }
    // this.amount = this.amount - c ;

    this.totalAmount = this.amount - c
  }

 

  

  
}

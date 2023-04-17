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

  constructor(private _getFoods: FoodDetailsService, private fb: FormBuilder) {
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

  getPrice(value: any) {
    console.log('button is clicked');
    console.log(value.target.value);
  }
  cartVisible: boolean = false;
  getCart() {
    this.cartVisible = !this.cartVisible;
  }

  CartArray: any[] = [];

  quantity: number = 0;

  SelectedItem = 0;
  totalAmount: number = 0;

  addToCart(item: any) {
    const index = this.CartArray.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (index === -1) {
      const newItem = { ...item, qty: 1 };
      this.CartArray.push(newItem);
      this.SelectedItem++;
    } else {
      this.CartArray[index].qty++;
      this.SelectedItem++;
    }

    this.totalAmount = this.CartArray.reduce(
      (acc, curr) => acc + curr.cost * curr.qty,
      0
    );
  }

  cancelButton() {
    this.CartArray = [];
    this.totalAmount = 0;
    this.SelectedItem = 0;
    this.cartVisible = false;
  }

  addBtn(item: any, qty: number, cost: number) {
    item.qty++;
    this.totalAmount += cost;
  }

  subBtn(item: any, qty: number, cost: number) {
    if (qty > 1) {
      item.qty--;
      this.totalAmount -= cost;
    }
  }
}

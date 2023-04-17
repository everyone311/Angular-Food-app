import { Component, NgZone } from '@angular/core';
import { FoodDetailsService } from '../food-details.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
})
export class ViewFoodsComponent {
  getFoods: any[] = [];
  filteredItems: any[] = [];

  constructor(
    private _getFoods: FoodDetailsService,
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
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
    const localUser = localStorage.getItem('user');
    console.log(localUser, 'localUser');

    if (localUser !== null) {
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
    } else {
      this.ngZone.run(() => this.router.navigateByUrl('/Login'));
    }
  }

  cancelButton() {
    this.CartArray = [];
    this.totalAmount = 0;
    this.SelectedItem = 0;
    this.cartVisible = false;
  }
  confirmButton() {
    if (this.SelectedItem === 0) {
      alert('Please add any itme to order!!');
    } else {
      alert('Your Order Confirmed!!');
    }
  }

  addBtn(item: any, qty: number, cost: number) {
    item.qty++;
    this.totalAmount += cost;
    this.SelectedItem++;
  }

  subBtn(item: any, qty: number, cost: number) {
    if (qty > 0) {
      item.qty--;
      this.totalAmount -= cost;
      this.SelectedItem--;
    }
    if (item.qty <= 0) {
      const index = this.CartArray.indexOf(item);
      if (index > -1) {
        this.CartArray.splice(index, 1);
        // this.SelectedItem--;
      }
    }
  }
}

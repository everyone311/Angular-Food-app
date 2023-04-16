import { Component } from '@angular/core';
import { FoodDetailsService } from '../food-details.service';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
})
export class ViewFoodsComponent {
  getFoods: any[] = [];
  filteredItems: any[] = [];
  constructor(private _getFoods: FoodDetailsService) {
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
}

import { Component } from '@angular/core';
import { FoodDetailsService } from '../food-details.service';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css']
})
export class ViewFoodsComponent {

  getFoods:any[] = []
  constructor(private _getFoods:FoodDetailsService){
    this.getFoods = _getFoods.getFoods();
  }


}

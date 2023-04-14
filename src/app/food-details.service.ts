import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodDetailsService {

  constructor() {}
   getFoods():any[]{
    return[
      {name:'Indian Breakfast',cost:'100',imgUrl:'indian-breakfast.jpg',category:'breakfast'},
      {name:'Coffee',cost:'30',imgUrl:'coffee.png',category:'Breakfast'},
      {name:'Ice Cream',cost:'40',imgUrl:'ice-cream.png',category:'Desserts'},
      {name:'Mango Juice',cost:'50',imgUrl:'mango.png',category:'juice'},
      {name:'Onion Pakota',cost:'30',imgUrl:'onion-pakoda.jpg',category:'Starter'},
      {name:'Fruit Salad',cost:'70',imgUrl:'fruit-salad.jpeg',category:'Breakfast'},
      {name:'Meals',cost:'150',imgUrl:'Full-meals.jpg',category:'Lunch'},
      {name:'Briyani',cost:'180',imgUrl:'biriyani.jpg',category:'Lunch'},
      {name:'Dosa',cost:'50',imgUrl:'dosa.jpg',category:'Breakfast'},
      {name:'Apple Juice',cost:'50',imgUrl:'apple.png',category:'Juice'},
      {name:'Choco Puffs',cost:'80',imgUrl:'chocho-puffs.png',category:'Desserts'},
      {name:'Watermeleon Juice',cost:'50',imgUrl:'watermeleon.png',category:'Juice'},

    ]
  }
}

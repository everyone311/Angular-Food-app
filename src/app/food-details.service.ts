import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodDetailsService {
  constructor() {}
  getFoods(): any[] {
    return [
      {
        name: 'Indian Breakfast',
        cost: 100,
        imgUrl: 'indian-breakfast.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Coffee',
        cost: 30,
        imgUrl: 'coffee.png',
        category: 'Breakfast',
        qty: 1
      },
      {
        name: 'Ice Cream',
        cost: 40,
        imgUrl: 'ice-cream.png',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Mango Juice',
        cost: 50,
        imgUrl: 'mango.png',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Onion Pakota',
        cost: 30,
        imgUrl: 'onion-pakoda.jpg',
        category: 'Starter',
        qty: 1
      },
      {
        name: 'Fruit Salad',
        cost: 70,
        imgUrl: 'fruit-salad.jpeg',
        category: 'Breakfast',
        qty: 1
      },
      {
        name: 'Meals',
        cost: 150,
        imgUrl: 'Full-meals.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Briyani',
        cost: 180,
        imgUrl: 'biriyani.jpg',
        category: 'Lunch',
        qty:1
      },
      { name: 'Dosa', cost: 50, imgUrl: 'dosa.jpg', category: 'Dinner',qty: 1 },
      
      {
        name: 'Apple Juice',
        cost: 50,
        imgUrl: 'apple.png',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Choco Puffs',
        cost: 80,
        imgUrl: 'chocho-puffs.png',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Watermeleon Juice',
        cost: 50,
        imgUrl: 'watermeleon.png',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Indian Combo Breakfast',
        cost: 75,
        imgUrl: '/Breakfast/indian-combo-breakfast.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Burger and French Fries',
        cost: 85,
        imgUrl: '/Lunch/burger-and-french-fries.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Shusi',
        cost: 60,
        imgUrl: '/Desserts/shusi.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Burger',
        cost: 65,
        imgUrl: '/Lunch/burgur.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Idly',
        cost: 50,
        imgUrl: '/Breakfast/idly.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Carrot Halwa',
        cost: 90,
        imgUrl: '/Desserts/carrot-halwa.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Chicken Pizza',
        cost: 130,
        imgUrl: '/Lunch/chicken-pizza.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Regular Dosa',
        cost: 60,
        imgUrl: '/Breakfast/regular-dosa.jpg',
        category: 'BreakFast',
        qty: 1
      },
      
      {
        name: 'Channa Curry',
        cost: 95,
        imgUrl: '/Lunch/channa-curry.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Apple juice',
        cost: 55,
        imgUrl: '/juices/green-apple.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Garlic Pizza',
        cost: 110,
        imgUrl: '/Lunch/Garlic-pizza.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Chinese Cheese Cake',
        cost: 120,
        imgUrl: '/Desserts/chinese-cheese-cake.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Masala Dosa',
        cost: 100,
        imgUrl: '/Breakfast/masala-dosa.png',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Chinese Box Noodles',
        cost: 60,
        imgUrl: '/Lunch/chinese-box-noodles.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Onion Pizza',
        cost: 110,
        imgUrl: '/Lunch/onion-pizza.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Avacado juice',
        cost: 65,
        imgUrl: '/juices/avacdo.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Chocolate Cake',
        cost: 130,
        imgUrl: '/Desserts/chocolate-cake.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Dosa Ghee Roast',
        cost: 120,
        imgUrl: '/Breakfast/dosa-ghee-roast.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Dhal Curry',
        cost: 80,
        imgUrl: '/Lunch/dhal-curry.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Mango juice',
        cost: 55,
        imgUrl: '/juices/mango-juice.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Cookies',
        cost: 75,
        imgUrl: '/Desserts/cookies.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Mint Ginger juice',
        cost: 60,
        imgUrl: '/juices/mint-ginger.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'French Fries',
        cost: 70,
        imgUrl: '/Lunch/french-fires.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Poori',
        cost: 70,
        imgUrl: '/Breakfast/poori.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Mushroom Pizza',
        cost: 150,
        imgUrl: '/Lunch/mushroom-pizza.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Cupcakes',
        cost: 90,
        imgUrl: '/Desserts/cupcakes.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Marraige Meals',
        cost: 130,
        imgUrl: '/Lunch/marriage-meals.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Orange juice',
        cost: 55,
        imgUrl: '/juices/orange.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Vegetable Pizza',
        cost: 100,
        imgUrl: '/Lunch/veg-pizza.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Pongal',
        cost: 50,
        imgUrl: '/Breakfast/pongal.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Gulab Jamun',
        cost: 50,
        imgUrl: '/Desserts/gulab-jamun.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Gulfi',
        cost: 55,
        imgUrl: '/Desserts/gulfi.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Pomogranate juice',
        cost: 75,
        imgUrl: '/juices/pomograte.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Puttu',
        cost: 30,
        imgUrl: '/Breakfast/puttu.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Halwa',
        cost: 80,
        imgUrl: '/Desserts/halwa.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Soda',
        cost: 45,
        imgUrl: '/juices/soda.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Raagi Dosa',
        cost: 80,
        imgUrl: '/Breakfast/Ragi-dosa.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Mochi',
        cost: 60,
        imgUrl: '/Desserts/mochi.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Roti',
        cost: 60,
        imgUrl: '/Breakfast/Rootti.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Rasamalai',
        cost: 70,
        imgUrl: '/Desserts/rasmalai.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Cucumber juice',
        cost: 45,
        imgUrl: '/juices/cucumber-juice.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Pav Bhaji',
        cost: 110,
        imgUrl: '/starters/pav-bhaji.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Upma',
        cost: 45,
        imgUrl: '/Breakfast/Upma.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'lemon juice',
        cost: 35,
        imgUrl: '/juices/lime-juice.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Dinner Meals',
        cost: 70,
        imgUrl: '/dinner/dinner-meals.jpg',
        category: 'Dinner',
        qty: 1
      },
      {
        name: 'Strawberry Pie',
        cost: 100,
        imgUrl: '/Desserts/strawberry-pie-mini.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Grape juice',
        cost: 55,
        imgUrl: '/juices/grape-red.jpg',
        category: 'Juice',
        qty: 1
      },
      {
        name: 'Grilled Shrimp',
        cost: 90,
        imgUrl: '/starters/grilled-shrimp.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Semya',
        cost: 55,
        imgUrl: '/Breakfast/semya-upma.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Fulka',
        cost: 75,
        imgUrl: '/dinner/fulka.jpg',
        category: 'Dinner',
        qty: 1
      },
      {
        name: 'Sweet Mixed',
        cost: 75,
        imgUrl: '/Desserts/sweet-mixed.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Cheese Pizza',
        cost: 90,
        imgUrl: '/Desserts/cheese-pizza.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name:'Idiyappam',
        cost: 45,
        imgUrl:'/Breakfast/idiyaappam.jpg',
        category:'Breakfast',
        qty: 1
      },
      {
        name: 'Walnut Chicket Brest Egg',
        cost: 110,
        imgUrl: '/Desserts/walnut-chicken-breast-egg.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Grilled Skewers',
        cost: 100,
        imgUrl: '/starters/grilled-skewers.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Vada',
        cost: 15,
        imgUrl: '/Breakfast/vada.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Chocolate Pudding',
        cost: 95,
        imgUrl: '/Desserts/chocolate-pudding.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name:'Chapathi with Chicken',
        cost: 40,
        imgUrl:'/Breakfast/chapathi-with-chicken.png',
        category:'Breakfast',
        qty: 1
      },
      {
        name: 'Dry Laddu',
        cost: 65,
        imgUrl: '/Dessets/dry-laddu.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Chinese Soup Noodles',
        cost: 130,
        imgUrl: '/Lunch/chinese-soap-noodles.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Chinese noodles',
        cost: 100,
        imgUrl: '/Lunch/chinese-noodles.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name:'Japanese Breakfast Large',
        cost: 70,
        imgUrl:'/Breakfast/japanese-breakfast-large.jpg',
        category:'Breakfast',
        qty: 1
      },
      {
        name: 'Fried Chicken',
        cost: 60,
        imgUrl: '/starters/fried-chicken.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Spicy Pasta',
        cost: 100,
        imgUrl: '/Lunch/spicy-pasta.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Kaju Katli',
        cost: 95,
        imgUrl: '/Desserts/kaju-katli.jpg',
        category: 'Desserts',
        qty: 1
      },
      {
        name: 'Pudding',
        cost: 70,
        imgUrl: '/starters/pudding.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Panner Butter Masala',
        cost: 85,
        imgUrl: '/Lunch/panner-butter-masala.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name:'Japanese Breakfast Small',
        cost: 80,
        imgUrl:'/Breakfast/japanese-breakfast-small.jpg',
        category:'Breakfast',
        qty: 1
      },
      {
        name:'Dhal Salad',
        cost: 80,
        imgUrl:'/Breakfast/dhal-salad.jpg',
        category:'Breakfast',
        qty: 1
      },
      {
        name: 'Fish Fry',
        cost: 120,
        imgUrl: '/Lunch/fish-fry.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Non Veg Large Meal',
        cost: 180,
        imgUrl: '/Lunch/non-veg-large-meal.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Samosa',
        cost: 40,
        imgUrl: '/starters/samosa.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Apple Salad',
        cost: 80,
        imgUrl: '/Breakfast/apple-salad.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Avacado Walnut Salad',
        cost: 90,
        imgUrl: '/Breakfast/avacado-walnut-salad.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Red Gabbage Salad',
        cost: 90,
        imgUrl: '/Breakfast/red-gabbage-salad.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Simple Pulao',
        cost: 90,
        imgUrl: '/Lunch/simple-pulao.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Strawberry Salad',
        cost: 80,
        imgUrl: '/Breakfast/Strawberry-salad.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Tangariene Spinach Salad',
        cost: 80,
        imgUrl: '/Breakfast/tangaries-spinach-walnut salad.jpg',
        category: 'BreakFast',
        qty: 1
      },
      {
        name: 'Sandwich',
        cost: 55,
        imgUrl: '/Lunch/Sandwish.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Rice with Shrimp',
        cost: 110,
        imgUrl: '/Lunch/rice-with-shrimp.jpg',
        category: 'Lunch',
        qty: 1
      },
      {
        name: 'Beef Bao Buns',
        cost: 90,
        imgUrl: '/starters/Beef-Bao-Buns.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Chilli Panner',
        cost: 95,
        imgUrl: '/starters/chilli-panner.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'Corn Chips',
        cost: 85,
        imgUrl: '/starters/corn-chips.jpg',
        category: 'Starters',
        qty: 1
      },
      {
        name: 'MoMos',
        cost: 95,
        imgUrl: '/starters/momos.jpg',
        category: 'Starters',
        qty: 1
      },





    ];
  }
}

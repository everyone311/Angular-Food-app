import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {

  constructor() { }

  about():any[]{
    return [
      {text:" Welcome to 2 Hot, your one-stop destination for ordering the tastiest and hottest food in town!"},
      {text:" At 2 Hot, we are passionate about food and we believe that everyone deserves a delicious and satisfying meal. Whether you are in the mood for a spicy bowl of noodles, a juicy burger, or a cheesy pizza, we have got you covered."},
      {text:"Our menu features a wide range of dishes that are made using only the freshest and highest quality ingredients. We work closely with local farmers and suppliers to ensure that we always have the best ingredients on hand."},
      {text:"But that's not all - at 2 Hot, we believe that food should be convenient and affordable. That's why we offer fast and reliable delivery services to your doorstep, so that you can enjoy your favorite meals without ever leaving the comfort of your home."},
      {text:"Our team of experienced chefs and dedicated staff are committed to providing you with the best possible dining experience. We take pride in our work and strive to exceed your expectations every time."},
      {text:"So why wait? Order now and experience the taste of 2 Hot!"}
    ]
  }
}

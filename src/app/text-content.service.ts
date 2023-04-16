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

  termsAndConditions():any[]
  {
    return [
      {text:'In any way that violates any applicable federal, state, local, or international law or regulation To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation'},
      {text:'Registration and Accounts To place orders on our website, you may need to register and create an account. You are responsible for maintaining the confidentiality of your account and password, and you agree to accept responsibility for all activities that occur under your account or password.'},
      {text:'Placing Orders When you place an order on our website, you are making an offer to purchase the products in your order. We reserve the right to reject or cancel any order for any reason, including but not limited to errors or inaccuracies in the product information or pricing.'},
      {text:'Payment You may be required to provide payment information to complete your order. We accept payment by credit card, debit card, or other payment methods as indicated on our website. By providing your payment information, you authorize us to charge the amount of your order to your chosen payment method.'},
      {text:'Delivery and Pickup We offer delivery and pickup options for your orders. Delivery and pickup times may vary depending on your location and other factors. You are responsible for providing accurate delivery or pickup information when placing your order.'},
      {text:'Intellectual Property Our website and its entire contents, features, and functionality are owned by 2 Hot or its licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.'},
      {text:'Disclaimer of Warranties Our website is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.'},
      {text:"Indemnification You agree to indemnify and hold 2 Hot and its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms and Conditions, your use of our website, or your violation of any law or the rights of a third party."}
    ]
  }
  privacyPolicy():any[]{
    return [
      {text:'At 2 Hot, we take the privacy and security of your personal information seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website to place orders for food or other products. By using our website, you agree to the terms of this Privacy Policy. '}
    ]
  }
}

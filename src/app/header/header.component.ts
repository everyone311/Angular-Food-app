import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  homeImg: string = '/assests/home-image.jpg';
  hi: string = '/assests/login.png';
  menu:boolean=false;
  showMenu(){
     this.menu =!this.menu; 
   }
}

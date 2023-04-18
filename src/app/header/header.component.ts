import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  homeImg: string = '/assests/home-image.jpg';
  hi: string = '/assests/login.png';
  menu: boolean = false;
  user: boolean = false;
  username: String | null = '';
  showMenu() {
    this.menu = !this.menu;
  }
  logoutButton() {
    console.log('Logout');
    localStorage.removeItem('user');
    // window.location.reload();
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('user');
    if (this.username !== null) {
      this.user = true;
      console.log('user');
    } else {
      this.user = false;
      console.log('!!!user');
    }
  }
}

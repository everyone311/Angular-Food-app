import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  restaurant1: string = '/assets/res-1.jpg';
  restaurant2: string = '/assets/res-2.jpg';
  restaurant3: string = '/assets/res-3.jpg';
  restaurant4: string = '/assets/res-4.jpg';
}

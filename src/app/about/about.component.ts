import { Component } from '@angular/core';
import { TextContentService } from '../text-content.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  text:any[] = [];
  constructor(private _getText:TextContentService){
    this.text = _getText.about();
  }


}

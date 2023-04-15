import { Component } from '@angular/core';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {

  getText:any[] = [];
  constructor(private _getText:TextContentService){
    this.getText = this._getText.termsAndConditions();
  }

}

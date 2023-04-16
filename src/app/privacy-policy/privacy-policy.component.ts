import { Component } from '@angular/core';
import { TextContentService } from '../text-content.service';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  text:any[] = [];
  constructor(private _getText:TextContentService){
    this.text = _getText.privacyPolicy();
  }
}

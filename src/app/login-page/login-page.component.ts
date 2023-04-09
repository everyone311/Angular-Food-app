import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  form:FormGroup=new FormGroup({
    Uname:new FormControl,
    pWord:new FormControl
  })
  constructor(private Lf:FormBuilder){}
  ngOnInit():void{
    this.form=this.Lf.group({
      Uname:['',[Validators.required]],
      pWord:['',[Validators.required]],
  });
  }
  
  get f():{[key:string]:AbstractControl}
  {
    return this.form.controls;
  }
  submit:boolean=false;
  onSubmit():void{
    this.submit=true;
  }
  
}

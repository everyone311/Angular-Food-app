import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,AbstractControl } from '@angular/forms';
import { Validation } from '../../assests/shared/password-valiadation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  form:FormGroup=new FormGroup({
    Uname:new FormControl,
    Pno:new FormControl,
    Email:new FormControl,
    pWord:new FormControl,
    cpWord:new FormControl
  })
  constructor(private Lf:FormBuilder, public router:Router){}
  ngOnInit():void{
    this.form=this.Lf.group({
      Uname:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Pno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      pWord:['',[Validators.required]],
      cpWord:['',[Validators.required]]
  },
  // {
  //   validator: Validation.match("password", "confirmPassword")
  // }
  );
  }
  
  get f():{[key:string]:AbstractControl}
  {
    return this.form.controls;
  }
  submit:boolean=false;
  onSubmit():void{
    this.submit=true;
    this.form.reset();
  }

}

import { Component } from '@angular/core';
import { Validators,FormArray,FormBuilder,FormControl,FormGroup,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  form:FormGroup=new FormGroup({
    cname:new FormControl,
    pno:new FormControl,
    price:new FormControl,
    address:new FormControl
  })
  constructor(private Lf:FormBuilder){}
  ngOnInit():void{
    this.form=this.Lf.group({
      cname:['',[Validators.required]],
      pno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      price:['',[Validators.required]],
      address:['',[Validators.required]]
  });
  }
  
  get f():{[key:string]:AbstractControl}
  {
    return this.form.controls;
  }
  submit:boolean=false;
  onsubmit():void{
    this.submit=true;
  }
    
  }

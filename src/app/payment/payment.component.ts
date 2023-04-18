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
    phone:new FormControl,
    price:new FormControl,
    address:new FormControl,
    cno:new FormControl,
    my:new FormControl,
    cvc:new FormControl
  })
  constructor(private Lf:FormBuilder){}
  ngOnInit():void{
    this.form=this.Lf.group({
      cname:['',[Validators.required]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      price:['',[Validators.required]],
      address:['',[Validators.required]], 
      cno:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      my:['',[Validators.required,]],
      cvc:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
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
  payment:boolean=false;
  creditcard(){
        this.payment=!this.payment;
      }
  online:boolean=false;
  onlinePayment(){
    this.online=!this.online;
  }
    
  }

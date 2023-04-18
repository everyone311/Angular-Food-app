import { Component, OnInit, NgZone } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  regForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,

      Validators.pattern(/^[6-9]\d{9}$/),

      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
      // Validators.pattern('[a-zA-Z0-9].*'),
    ]),
    retypePassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private Rf: FormBuilder,
    public router: Router,
    private ngZone: NgZone,
    private LoginService: LoginService
  ) {}

  get username(): FormControl {
    return this.regForm.get('username') as FormControl;
  }
  get email(): FormControl {
    return this.regForm.get('email') as FormControl;
  }
  get mobile(): FormControl {
    return this.regForm.get('phone') as FormControl;
  }
  get pwd(): FormControl {
    return this.regForm.get('password') as FormControl;
  }
  get cpwd(): FormControl {
    return this.regForm.get('retypePassword') as FormControl;
  }

  ngOnInit(): void {}
  repeatPass: String = 'none';
  successMessage: String = '';
  messageShow: Boolean = false;

  onSubmit() {
    if (this.pwd.value === this.cpwd.value) {
      this.repeatPass = 'none';
      console.log('correct password');
    } else {
      this.repeatPass = 'inline';
    }
    console.log(this.regForm.value);

    // backend call

    if (this.regForm.status === 'VALID' && this.pwd.value === this.cpwd.value) {
      this.LoginService.RegisterUser(this.regForm.value).subscribe(
        (res) => {
          console.log('Response', res);
          this.successMessage = res.message;

          this.regForm.reset();
          this.ngZone.run(() => this.router.navigateByUrl('/Login'));
        },
        (err) => {
          console.log('err', err);
          this.successMessage = err;
        }
      );
    } else {
      console.log('error from register ts');
    }
  }
}

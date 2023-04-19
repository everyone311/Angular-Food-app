import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private Lf: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private LoginService: LoginService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.Lf.group({
      username: [
        '',
        Validators.required,
        // Validators.maxLength(8),
        // Validators.minLength(4),
        // asyncValidator,
      ],
      password: ['', Validators.required],
      // username: [''],
      // password: [''],
    });
  }
  ngOnInit(): void {}

  get UsernameValidate() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit: boolean = false;
  loginErrorMessage: string = '';
  onSubmit(): any {
    this.submit = true;
    console.log('Login ', this.loginForm.value);

    if (
      this.UsernameValidate?.status === 'VALID' &&
      this.password?.status === 'VALID'
    ) {
      this.LoginService.AddUser(this.loginForm.value).subscribe(
        (res) => {
          console.log('Loggged in!', res);

          localStorage.setItem('user', res.user.username);
          this.toastr.success('Logged in Successfully!', 'Success');

          this.ngZone.run(() => this.router.navigateByUrl('/Home'));
          this.loginForm.reset();
        },
        (err) => {
          console.log('Error in login res', err.error);
          this.loginErrorMessage = err.error.error + '!!';
        }
      );
    } else {
      console.log('error from login ts');
    }
  }
}

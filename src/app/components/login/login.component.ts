import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '@app-core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(public auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onGoogleLoginClick() {
    this.auth.googleLogin().catch(err => {
      this.error = err;
    });
  }

  onEmailLoginClick() {
    this.auth.emailPasswordLogin(this.loginForm.value.email, this.loginForm.value.password).catch(err => {
      this.error = err;
    });
  }
}

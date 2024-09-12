import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/services/service.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { AuthService } from '../services/auth/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  readonly Root_URL = 'https://localhost:5001/api'

  hide: any;
  showAuthenticationError: boolean = false;
  authenticationError: string = "";
  data: user[] = [];

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, private router: Router, private _service: ServiceService,
    private auth: AuthService,private _snackBar:MatSnackBar
   /* private _AuthService:AuthService*/, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: [null, [Validators.required]],
      Password: [null, [Validators.required]]
    });
   localStorage.clear();
  }

  LogIn() {
    if (this.loginForm.valid) {
      let payload: any = {};
      payload['UserName'] = this.loginForm.value.Username;
      payload['Password'] = this.loginForm.value.Password;
      console.log(payload)
      this._service.userLogin(payload).subscribe(result => {
        localStorage.setItem('username', this.loginForm.value.Username)
        localStorage.setItem('token', JSON.stringify(result))
        this.loginForm.reset();

        this.router.navigate(['otp']).then((navigated: boolean) => {
          if(navigated) {
            this._snackBar.open(`The OTP has been sent to your email address`, 'X', {duration: 10000});
          }
       });
      })

      /* original login 
       this._service.userLogin(payload).subscribe((res: any) => {
        this.auth.setToken(res.token);
        if (res.token != null) {
          
          let role = Number(this.getDecodedAccessToken(res.token).Role[0]);
          console.log(role)

          if (role == 1) {
            this.router.navigate(["/home"]);
          }
          else if (role == 2) {
            this.router.navigate(["/home"]);
          }
          else if (role == 3) {
            this.router.navigate(["/home"]);
          }
        }
      })
      */
     
    }
  }
  
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}

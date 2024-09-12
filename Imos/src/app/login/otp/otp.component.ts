import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/services/auth/auth.types';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  user: User = {
    userName:'',
    otp: ''
  }

  otpFormGroup:FormGroup = this.fb.group({
    Otp: ['', Validators.required],
   })
  constructor( private fb: FormBuilder, private router:Router ,private snackBar: MatSnackBar,private _Auth:AuthService) { }

  ngOnInit(): void {
  }

  SubmitOtp(){
    if (localStorage.getItem('token')){
      this.user = JSON.parse(localStorage.getItem('token')!)
        this.user.otp = this.otpFormGroup.value['Otp']
        this.user.userName = localStorage.getItem('username')!
       // console.log('test otp', this.user)
        this._Auth.ValidateOtp(this.user).subscribe(res=>{
          this.otpFormGroup.reset();
          this.router.navigate(["/home"])//add navigation
        });
        (response: HttpErrorResponse) => {
          if (response.status === 400) {
            this.snackBar.open(response.error, 'X', {duration: 5000});
          }
        }
    }


  }


}

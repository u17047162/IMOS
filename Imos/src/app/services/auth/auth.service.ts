import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { User } from './auth.types';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  endpointBase = environment.endpointBase;

  constructor(private _httpClient: HttpClient,
    private _router: Router) {
  }

  setToken(token: string) {
    localStorage.setItem( "token",token)
  }

  getToken() {
   return localStorage.getItem('token')
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  logIn(payload: any) {
    return this._httpClient
      .post(this.endpointBase.concat("Account/Login"),payload)
  }

  logOut() {
    localStorage.removeItem('token')
    this._router.navigate(['']);// to navigate back to login
  }
  ValidateOtp(user:User){
    console.log('before otp', user)
    return this._httpClient.post(this.endpointBase.concat("Account/Otp"),user)
  }

}

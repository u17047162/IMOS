
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog,
    private _AuthService:AuthService) { }

 
  onLogOut(){
    this._AuthService.logOut();
    this.router.navigate(["/login"])
  }
   

  ngOnInit(): void {
  }

}


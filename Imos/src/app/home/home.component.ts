import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { CurrentUser } from '../services/auth/auth.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser:CurrentUser

  constructor(private route: Router,private _AuthService:AuthService)
   {
    this.getUserDetails();

   }


  backgroundUrl = "./../../assets/Untitled Diagram.jpg"
 

  ngOnInit(): void {
    
  }



  employee() {
    this.route.navigateByUrl("/employee");
  }

  BackUp() {
    this.route.navigateByUrl("/BackUp");
  }

  HelpView() {
    this.route.navigateByUrl("/HelpView");
  }

  material() {
    this.route.navigateByUrl("/material");
  }

  supplier() {
    this.route.navigateByUrl("/supplier");
  }
  user() {
    this.route.navigateByUrl("/user");

  }

  incident() {
    this.route.navigateByUrl('/incident')
  }

  clients() {
    this.route.navigateByUrl('/client')
  }

  warehouses() {
    this.route.navigateByUrl('/warehouse')
  }

  equipment() {
    this.route.navigateByUrl('/equipment')
  }

  projects() {
    this.route.navigateByUrl('/project')
  }
  task(){
    this.route.navigateByUrl('/Task')
  }

  vehicle() {
    this.route.navigateByUrl('/vehicle')
  }
  saftyCheclist(){
    this.route.navigateByUrl('/saftyChecklist')
  }
 Reports(){
    this.route.navigateByUrl('/Allreports')
  }

  reports(){
    this.route.navigateByUrl('/reports')
  }

  auditTrails() {
    this.route.navigateByUrl("/auditTrail");
  }

  private getUserDetails(){
    //this.loggedInUser = this._AuthService.getToken;

  }

}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  UserDetails(){
    this.router.navigateByUrl('/logout');
  }

  home(){
    this.router.navigateByUrl('home');
  }
  help(){
    
  }

  ngOnInit(): void {
  }

}

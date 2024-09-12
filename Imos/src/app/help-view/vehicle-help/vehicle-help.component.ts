import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-help',
  templateUrl: './vehicle-help.component.html',
  styleUrls: ['./vehicle-help.component.css']
})
export class VehicleHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: any[] = [
    { name: ' 1. Add '},
     { name: '2. Update ' },
     { name: '3. Delete' },
     { name: '4. Search' },


    ];
  userFilter: any = { name: '' };



}

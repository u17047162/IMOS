import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-help',
  templateUrl: './reports-help.component.html',
  styleUrls: ['./reports-help.component.css']
})
export class ReportsHelpComponent implements OnInit {

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

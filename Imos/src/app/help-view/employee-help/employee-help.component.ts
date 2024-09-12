import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-help',
  templateUrl: './employee-help.component.html',
  styleUrls: ['./employee-help.component.css']
})
export class EmployeeHelpComponent implements OnInit {

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

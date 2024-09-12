import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-help',
  templateUrl: './warehouse-help.component.html',
  styleUrls: ['./warehouse-help.component.css']
})
export class WarehouseHelpComponent implements OnInit {

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

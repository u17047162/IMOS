import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-help',
  templateUrl: './supplier-help.component.html',
  styleUrls: ['./supplier-help.component.css']
})
export class SupplierHelpComponent implements OnInit {

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

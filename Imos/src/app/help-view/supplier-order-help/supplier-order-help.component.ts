import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-order-help',
  templateUrl: './supplier-order-help.component.html',
  styleUrls: ['./supplier-order-help.component.css']
})
export class SupplierOrderHelpComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-help',
  templateUrl: './equipment-help.component.html',
  styleUrls: ['./equipment-help.component.css']
})
export class EquipmentHelpComponent implements OnInit {

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

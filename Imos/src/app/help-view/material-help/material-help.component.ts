import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-help',
  templateUrl: './material-help.component.html',
  styleUrls: ['./material-help.component.css']
})
export class MaterialHelpComponent implements OnInit {

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

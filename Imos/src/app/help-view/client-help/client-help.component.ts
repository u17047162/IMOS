import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-help',
  templateUrl: './client-help.component.html',
  styleUrls: ['./client-help.component.css']
})
export class ClientHelpComponent implements OnInit {

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

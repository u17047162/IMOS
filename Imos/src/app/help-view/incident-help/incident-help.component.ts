import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-help',
  templateUrl: './incident-help.component.html',
  styleUrls: ['./incident-help.component.css']
})
export class IncidentHelpComponent implements OnInit {

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
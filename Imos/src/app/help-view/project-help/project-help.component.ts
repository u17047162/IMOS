import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-help',
  templateUrl: './project-help.component.html',
  styleUrls: ['./project-help.component.css']
})
export class ProjectHelpComponent implements OnInit {

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

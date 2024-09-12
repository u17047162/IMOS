import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { employee, ServiceService, user, userrole } from '../services/service.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface User {
  userId: number,
  userRoleId: number,
  employeeId: number,
  username: string,
  userPassword: string,
  employee:string,
  name?:string,
  description:string,
  equipmentchecks: [],
  stocktakes: [],
  tasks: [],
  userincidents: [],
  vehicles: []
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  // API Test

  //data: User[] = [];
  userRolematch!: boolean;
  itemToDelete!: User;

  data: user[] = [];

  displayedColumns: string[] = ['userrole', 'name', 'userName', 'password', 'actions'];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  rolelist: userrole[] = [];
  employeelist: employee[] = [];

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
    this.GetAllUsers();
  }
  
  ngOnInit(): void {
    this.service.getUserRole().subscribe(x =>
      { this.rolelist = x;
         console.log("rolelist", this.rolelist)
        });
    this.service.getEmployees().subscribe(i => { this.employeelist = i; console.log("employeelist", this.employeelist) });
  }


  GetAllUsers() {
    this.service.getUser().subscribe(x => {
      this.data = x;
      console.log(this.data);
      this.posts = x;

      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  addUser() {
    this.route.navigateByUrl('addUser')
  }
  
  deleteUser(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this User?')) {
      this.service.deleteUser(id).subscribe(res => {
        this.GetAllUsers();
        this._snackBar.open("Success, you have deleted a User!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  userRole() {
    this.route.navigateByUrl('userrole')
  }

}

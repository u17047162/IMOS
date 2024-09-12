import { employee } from 'src/app/services/service.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Empdocument, ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadsService } from '../services/uploads/uploads.service';

export interface Employee{
  employeeId: number,
  name: string,
  email: string,
  FileUrl: any,
  contactNumber: number,
  projectemployees: [],
  users: [],
  documents: [],
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  // API Test
  data: employee[] = [];
  listOfProccessedEmployees: employee[] = [];

  displayedColumns: string[] = [ 'name', 'email', 'number', 'actions'];

  dataSource!: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts: any;

  constructor(private route: Router, private service: ServiceService,
    private _snackBar:MatSnackBar, private _uploads:UploadsService
    ) {

    this.service.getEmployees().subscribe(x => {
      this.data = x;
      console.log(this.data);
    });
   }

   ngOnInit(): void {
    this.GetAllEmployees()
  }
   
   GetAllEmployees() {
    this.service.getEmployees().subscribe(x => {
      this.data = x;
      console.log(this.data);
      this.posts = x
      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  deleteEmployee(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Employee?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.GetAllEmployees();
        this._snackBar.open("Success, you have deleted an Employee", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }


  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
 
  addEmployee(){
    this.route.navigateByUrl('AddEmployee')
  }
  
  UpdateEmployee(id:number) {
    this.route.navigateByUrl('UpdateEmployee/' + id);
  }

   viewContract(item:number){
    this.listOfProccessedEmployees=[];
    let foudEmp;
    console.log(this.listOfProccessedEmployees)
    this._uploads.downloadEmployeeDocument(item).subscribe(res=>{
      foudEmp=res;
      console.log(this.viewContract)

      let image = foudEmp ;
      let reader = new FileReader();
      reader.addEventListener("load" ,()=>{
      foudEmp=reader.result;
       // this.listOfProccessedEmployees.push(foudEmp);
      },false);

      if (image){
        //reader.readAsDataURL(image);
      }
    });
  }

  EmployeeAttendance(){
    this.route.navigateByUrl('Employee-Attendance')

  }
 
  
}

import { tasktype, user } from './../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService, task } from '../services/service.service';

export interface Task{
  taskId: number,
  tasktype: string,
  userid: string,
  startdate: any,
  enddate: any,
  invoices: [],
  taskmaterials: []
}


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 // API Test
 data: task[] = [];
 type: any;
 hide: boolean = false;

 displayedColumns: string[] = ['tasktype', 'user', 'startdate', 'enddate', 'qnapassed', 'actions'];

 dataSource!: MatTableDataSource<Task>;

 @ViewChild(MatPaginator) paginator!: MatPaginator
 @ViewChild(MatSort) sort!: MatSort

 posts: any;
 TypeList : tasktype[] = [];
 TypeList1 : user[] = [];

 constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
   this.GetAllTasks();
 }

 GetAllTasks() {
   this.service.getTask().subscribe(x => {
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

 UpdateTask(element: any) {
  console.log(element.taskId)
  this.service.setTaskId(element.taskId);
  this.route.navigateByUrl('/UpdateTask')
  
}

 addTask() {
   this.route.navigateByUrl('/AddTask')
 }


 closeClick(){
  this.hide= false;
  this.service.getTask().subscribe(x => {
    this.data = x;
    console.log(this.data);
    this.posts = x;

    this.dataSource = new MatTableDataSource(this.posts)

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
})
} 


 deleteTask(id: number) {
   console.log(id);
   if (confirm('Are you sure you want to delete this Task?')) {
     this.service.deleteTask(id).subscribe(res => {
       this.GetAllTasks();
       this._snackBar.open("Success, you have deleted a Task!", 'OK', {
         duration: 3000,
         verticalPosition: 'bottom',
       });
     });
   }
 }

 taskType() {
   this.route.navigateByUrl('/Tasktype')
 }

 ngOnInit(): void {
   this.service.getTaskType().subscribe(x => { this.TypeList = x; console.log("type", this.TypeList) });
   this.service.getUser().subscribe(x => { this.TypeList1 = x; console.log("type", this.TypeList) });
 }


}

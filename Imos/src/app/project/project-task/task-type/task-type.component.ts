import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientRequestComponent} from 'src/app/client-request/client-request.component'
import {ServiceService,TaskType,TaskStatus} from 'src/app/services/service.service';

import {AddTaskTypeComponent} from './add-task-type/add-task-type.component';
import {UpdateTaskTypeComponent} from './update-task-type/update-task-type.component';


@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css']
})
export class TaskTypeComponent implements OnInit {

TaskType: TaskType[] = [];
displayedColumns: string[] = ['description','actions'];

dataSource!: MatTableDataSource<TaskType>;

@ViewChild(MatPaginator) paginator!: MatPaginator

@ViewChild(MatSort) sort!: MatSort


posts: any;

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) {
        this.getTaskType();
       }

       getTaskType(){
        this.service.getTaskType()
        .subscribe(x => {
          console.log(x);
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

      openAddTaskType(): void {
        const dialogRef = this.dialog.open(AddTaskTypeComponent, {
          width: '25%',
          height:'35%'
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTaskType();


        });
      }

      openUpdateTaskType(id:number): void {
        const dialogRef = this.dialog.open(UpdateTaskTypeComponent, {
          width: '25%',
          height:'35%',
          data: {id}
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTaskType();


        });
      }

      deleteTaskType(id: number){
        if (confirm('Are you sure you want to delete this task type')) {
          this.service.deleteTaskTypefinalSP(id)
          .subscribe( res => {
           // this.GetUrgencyLvl();
           this.getTaskType();
            this._snackBar.open("Successfully deleted a task type ", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',

          });
        });
      }
      }


  ngOnInit(): void {
  }

}

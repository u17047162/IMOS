import { TaskMaterialComponent } from './task-material/task-material.component';
import { ManageTaskStatusComponent } from './task-status/manage-task-status/manage-task-status.component';
import { Task,ServiceService } from './../../services/service.service';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { UpdateTaskStatusComponent } from './task-status/update-task-status/update-task-status.component';
@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit {

  Tasks: Task[] =[] ;

displayedColumns: string[] = ['description','tasktypeDescription','startdate','enddate','statusName','actions'];


dataSource!: MatTableDataSource<Task>;


@ViewChild(MatPaginator) paginator!: MatPaginator

  @ViewChild(MatSort) sort!: MatSort


  posts: any;



  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) {
        this.getTask();
       }


       getTask(){
        this.service.getTasksByProjectfinal(this.data.id)
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


      deleteTask(id: number){
        if (confirm('Are you sure you want to delete this task ')) {
          this.service.deleteTaskproject(id)
          .subscribe( res => {
           // this.GetUrgencyLvl();
           this.getTask();
            this._snackBar.open("Successfully deleted a task  ", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',

          });
        });
      }
      }

      openAddTask(id: number): void {
        const dialogRef = this.dialog.open(AddTaskComponent, {
          width: '35%',
          height:'70%',
          data: {id}
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTask();

        });
      }


      openUpdateTaskStatus(id:number): void {
        const dialogRef = this.dialog.open(UpdateTaskComponent, {
          width: '35%',
          height:'70%',
          data: {id}
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTask();

        });
      }

      openManageTaskStatus(id: number): void {
        const dialogRef = this.dialog.open(ManageTaskStatusComponent, {
          width: '35%',
          height:'70%',
          data: {id}
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTask();

        });
      }

      openTaskMaterial(id: number): void {
        const dialogRef = this.dialog.open(TaskMaterialComponent, {
          width: '35%',
          height:'70%',
          data: {id}
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTask();

        });
      }


  ngOnInit(): void {
  }

}

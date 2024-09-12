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
import {AddTaskStatusComponent} from './add-task-status/add-task-status.component';
import { UpdateTaskStatusComponent} from './update-task-status/update-task-status.component';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {

  Taskstatus: TaskStatus[] = [];

  displayedColumns: string[] = ['name','actions'];

  dataSource!: MatTableDataSource<TaskStatus>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  @ViewChild(MatSort) sort!: MatSort


  posts: any;



  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) {
        this.getTaskStatus();
       }




       getTaskStatus(){
        this.service.getTaskStatus()
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

      deleteTaskStatus(id: number){
        if (confirm('Are you sure you want to delete this task status')) {
          this.service.deleteTaskStatus(id)
          .subscribe( res => {
           // this.GetUrgencyLvl();
           this.getTaskStatus();
            this._snackBar.open("Successfully deleted a task status ", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',

          });
        });
      }
      }

      openAddTaskStatus(): void {
        const dialogRef = this.dialog.open(AddTaskStatusComponent, {
          width: '25%',
          height:'35%'
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTaskStatus();

        });
      }

      openUpdateTaskStatus(id:number): void {
        const dialogRef = this.dialog.open(UpdateTaskStatusComponent, {
          width: '25%',
          height:'35%',
          data: {id}
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getTaskStatus();

        });
      }





  ngOnInit(): void {
  }

}

import { tasktype } from './../../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface TaskType {
  tasktypeId: number,
  description: string,
  tasks: []
}

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css']
})
export class TaskTypeComponent implements OnInit {

  type: any;
  hide: boolean = false;

  // API Test
  data: tasktype[] = [];

  displayedColumns: string[] = ['description', 'actions'];

  dataSource!: MatTableDataSource<TaskType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
    this.GetAllTaskTypes();
  }

  GetAllTaskTypes() {
    this.service.getTaskType().subscribe(x => {
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

  UpdateTaskType(id: number) {
    this.route.navigateByUrl('/UpdateTaskType/'+id)
  }


  addTaskType() {
    this.route.navigateByUrl('/AddTaskType')
  }

  deleteTaskType(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Task Type?')) {
      this.service.deleteTaskType(id).subscribe(res => {
        this.GetAllTaskTypes();
        this._snackBar.open("Success, you have deleted a Task Type!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  ngOnInit(): void {
  }

}

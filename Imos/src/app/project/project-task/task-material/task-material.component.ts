
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ServiceService, ProjectMaterial,TaskMaterial } from 'src/app/services/service.service';
@Component({
  selector: 'app-task-material',
  templateUrl: './task-material.component.html',
  styleUrls: ['./task-material.component.css']
})
export class TaskMaterialComponent implements OnInit {
taskmaterialData:  TaskMaterial[] =[];

displayedColumns: string[] = ['materialName','materialTypeName', 'quantity', 'actions'];

dataSource!: MatTableDataSource<TaskMaterial>;

@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort
posts: TaskMaterial[];

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) {

        this.GetTaskMaterial(this.data.id)
       }

  ngOnInit(): void {
  }


  GetTaskMaterial(id: number){

    console.log(this.data.id);
    this.service.getTaskMateiral(id)
    .subscribe(x=> {

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



}

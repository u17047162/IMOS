import { AddTaskMaterialComponent } from './../project-task/task-material/add-task-material/add-task-material.component';
import { AddProjectMaterialComponent } from './add-project-material/add-project-material.component';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ServiceService, ProjectMaterial} from 'src/app/services/service.service';


@Component({
  selector: 'app-project-material',
  templateUrl: './project-material.component.html',
  styleUrls: ['./project-material.component.css']
})
export class ProjectMaterialComponent implements OnInit {


projectmaterialdata : ProjectMaterial[] = [] ;


displayedColumns: string[] = ['materialName','materialTypeName', 'quantity', 'actions'];

dataSource!: MatTableDataSource<ProjectMaterial>;

description!: any;

@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort
posts: ProjectMaterial[];

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) {
        this.GetProjectMaterial(this.data.id);
        }

  ngOnInit(): void {
  }

  GetProjectMaterial(id: number){

    console.log(this.data.id);
    this.service.getProjectMateiral(id)
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
this.description.filter = FilterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }


  openAddProjectMaterial(id:number): void {
    const dialogRef = this.dialog.open(AddProjectMaterialComponent, {
      width: '55%',
      height:'70%',
      data: {id}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetProjectMaterial(this.data.id);

    });
  }

  openAddTaskMaterial(projectMaterialId:number,materialId: number, id:number): void {
    const dialogRef = this.dialog.open(AddTaskMaterialComponent, {
      width: '55%',
      height:'70%',
      data: {projectMaterialId,materialId,id}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetProjectMaterial(this.data.id);

    });
  }


}

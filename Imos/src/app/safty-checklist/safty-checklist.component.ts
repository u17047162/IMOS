
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {  project, safetyItem, ServiceService } from '../services/service.service';
import { AddSaftyChecklistComponent } from './add-safty-checklist/add-safty-checklist.component';

export interface Safetyfilechecklist{
  projectId:number,
  safetyfileitemId:number,
  project:string,
  safetyfileitem:string,
  projectName?:string,
  name?:string
}

@Component({
  selector: 'app-safty-checklist',
  templateUrl: './safty-checklist.component.html',
  styleUrls: ['./safty-checklist.component.css'],
  template:' {{data.id}}'
})
export class SaftyChecklistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'projectname', 'SafetyItems','actions'];

  dataSource!: MatTableDataSource<Safetyfilechecklist>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  SafetyItems:safetyItem[]=[];
  TypeList:project[]=[];

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private _router: Router, private _service: ServiceService, 
    private _snackBar: MatSnackBar) {
    this.GetAllProjectSafetyChecklistItem();

   }

   ngOnInit(): void {
    this._service.getSafetyCategory().subscribe(x=>{
    })
    
  }
   
   GetAllProjectSafetyChecklistItem(){
    this._service.getProjectChecklist().subscribe(x => {
      this.posts = x;
      console.log(x)
      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }

   addChecklist(){
    this._router.navigateByUrl('/addProjectChecklist')
   }

   applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

openAddDialog():void{

  const dialogRef = this.dialog.open(AddSaftyChecklistComponent, {
    width: '66%',
    height:'70%'
  }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}

  // update method route
  UpdateProjectSafetyChecklist(id:number) {
    //console.log("Test " +id)
    this._router.navigate(['UpdateProjectSafetyChecklist',id])
  }

  // delete method route   getSafetyCategory
  removeProjectSafetyChecklist(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Supplier?')) {
      this._service.deleteProjectSafetyChecklist(id).subscribe(res => {
        this.GetAllProjectSafetyChecklistItem();
        this._snackBar.open("Success, you have deleted a Supplier!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  saftychecklistcatagory(){
    this._router.navigateByUrl('/saftyChecklistCatagory')
  }
}


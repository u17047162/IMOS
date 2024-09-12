
import { Component, OnInit, ViewChild,Inject } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService, MaterialRequestStatus } from 'src/app/services/service.service';
import {AddMaterialRequestStatusComponent} from '../material-request-status/add-material-request-status/add-material-request-status.component';
import {UpdateMaterialRequestStatusComponent} from '../material-request-status/update-material-request-status/update-material-request-status.component';



@Component({
  selector: 'app-material-request-status',
  templateUrl: './material-request-status.component.html',
  styleUrls: ['./material-request-status.component.css']
})
export class MaterialRequestStatusComponent implements OnInit {

  posts:any
  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort

dataSource!: MatTableDataSource<MaterialRequestStatus>;

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar)
        {
          this.getRequestStatuts()
         }

  ngOnInit(): void {
  }

    getRequestStatuts(){
      this.service.getMaterialRequestStatus()
      .subscribe(x => {
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

  openAddRequestStatusDialog(): void {
    const dialogRef = this.dialog.open(AddMaterialRequestStatusComponent, {
      width: '25%',
      height:'35%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRequestStatuts()

    });
  }

  openUpdateRequestStatusDialog(id:number): void {
    const dialogRef = this.dialog.open(UpdateMaterialRequestStatusComponent, {
      width: '25%',
      height:'35%',
      data: {id}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRequestStatuts()

    });
  }


  deleteUrgencylvl(id: number){
    if (confirm('Are you sure you want to delete this Material Request Status')) {
      this.service.deleteRequestStatus(id)
      .subscribe( res => {
        this.getRequestStatuts();
        this._snackBar.open("Successfully deleted a Material Request Status", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
      });
    });
  }
  }


}

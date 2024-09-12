import { ConfirmAssignmentRemovalComponent } from './confirm-assignment-removal/confirm-assignment-removal.component';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Observable } from 'rxjs';

import {  EventEmitter, Output } from '@angular/core';
import { ServiceService, vehicle } from 'src/app/services/service.service';
import { SelectForemanViewComponent } from '../unassigned-vehicle-view/select-foreman-view/select-foreman-view.component';

@Component({
  selector: 'app-assigned-vehicles-view',
  templateUrl: './assigned-vehicles-view.component.html',
  styleUrls: ['./assigned-vehicles-view.component.css']
})
export class AssignedVehiclesViewComponent implements OnInit {


 // API Test
 Vehicledata: vehicle[] = [];
 vehicleData: vehicle[];

 displayedColumns: string[] = [ 'vehicleType','make','model','color','Year','DatePurchased','actions'];

 dataSource!: MatTableDataSource<vehicle>;

 @ViewChild(MatPaginator) paginator!: MatPaginator
 @ViewChild(MatSort) sort!: MatSort

 posts: any;


  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar
  ) {
    this.GetAssignedVehicles()
  }

  ngOnInit(): void {
  }

    GetAssignedVehicles() {
    this.service.getAssingedVehicle().subscribe(x => {
      this.Vehicledata = x;
      console.log(this.Vehicledata);
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


  openConfirmDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmAssignmentRemovalComponent, {

      width: '25%',
      height:'22%',
      data:{id},

    }

    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetAssignedVehicles()

    });
  }



}

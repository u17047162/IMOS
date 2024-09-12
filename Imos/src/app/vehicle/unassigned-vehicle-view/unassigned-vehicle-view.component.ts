import { SelectForemanViewComponent } from './select-foreman-view/select-foreman-view.component';

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

@Component({
  selector: 'app-unassigned-vehicle-view',
  templateUrl: './unassigned-vehicle-view.component.html',
  styleUrls: ['./unassigned-vehicle-view.component.css']
})
export class UnassignedVehicleViewComponent implements OnInit {

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
      private MatDialog: MatDialogRef<UnassignedVehicleViewComponent>,
       private _snackBar: MatSnackBar
  ) {
    this.GetUnassignedVehicles()
   }

  ngOnInit(): void {
  }

  GetUnassignedVehicles() {
    this.service.getUnassingedVehicle().subscribe(x => {
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


  openSelectForemanDialog(id: number): void {
    const dialogRef = this.dialog.open(SelectForemanViewComponent, {

      width: '25%',
      height:'32%',
      data:{id},

    }

    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetUnassignedVehicles();

    });
  }

  Cancel()
    {
      this.MatDialog.close();
    }


}

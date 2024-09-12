import { UnassignedVehicleViewComponent } from './unassigned-vehicle-view/unassigned-vehicle-view.component';
import { ServiceService, vehicle, vehicletype, user, vehiclemake, vehiclemodel } from './../services/service.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import { Observable } from 'rxjs';
import {UploadVehiclePhotoComponent} from './upload-vehicle-photo/upload-vehicle-photo.component';
import {  EventEmitter, Output } from '@angular/core';
import { AssignedVehiclesViewComponent } from './assigned-vehicles-view/assigned-vehicles-view.component';

export interface Vehicle {
  vehicleId: number,
  brandId: number,
  name?: string,
  vehicletypeId: number,
  description?: string,
  modelId: number,
  year?: string,
  modelName?:string,
  AssignedStatus: number,
  vehicletype: string,
  DatePurchased: string,
  status: string,
  imageUrl: string,
  vehiclemake: string,
  vehiclemodel: string,
}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  template:' {{data.id}}',
})
export class VehicleComponent implements OnInit {

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;

  // API Test
  Vehicledata: vehicle[] = [];
  vehicleData: vehicle[];

  UnAssignedVehicle:vehicle[];


  displayedColumns: string[] = [ 'make','vehicleType','modelName','Year','status','actions'];
  dataSource!: MatTableDataSource<vehicle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private route: Router,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public VehicleID:{id:number},
    private service: ServiceService,
     private _snackBar: MatSnackBar) {
    this.GetAllVehicles();
   }
   
   ngOnInit(): void {
   
    //this.service.getUser().subscribe(i => { this.userlist = i; console.log("userlist", this.userlist) });
  }

  GetAllVehicles() {
    this.service.getVehicle().subscribe(x => {
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


  openAddVehicleDialog(): void {
    const dialogRef = this.dialog.open(AddVehicleComponent, {
      width: '60%',
      height:'70%',
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetAllVehicles();

    });
  }

  openUploadVehiclePhotoDialog(id: number): void {
    console.log()
    const dialogRef = this.dialog.open(UploadVehiclePhotoComponent, {

      width: '40%',
      height:'70%',
      data:{id},

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetAllVehicles();

    });
  }


  openAssignVehicleDialog(): void {
    const dialogRef = this.dialog.open(UnassignedVehicleViewComponent, {

      width: '60%',
      height:'70%',


    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetAllVehicles();

    });
  }

  openAssignedVehicleDialog(): void {
    const dialogRef = this.dialog.open(AssignedVehiclesViewComponent, {

      width: '60%',
      height:'70%',


    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.GetAllVehicles();

    });
  }


  UpdateVehicle(id:number) {
    this.route.navigate(['updateVehicle',id])
  }
  assignVehicle() {
    //or navigate (['assignVehicle',id])
    this.route.navigateByUrl('/assignVehicle')
  }
  addVehicle() {
    this.route.navigateByUrl('/addVehicle')
  }

  deleteVehicle(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Vehicle?')) {
      this.service.deleteVehicle(id).subscribe(res => {
        this.GetAllVehicles();
        this._snackBar.open("Success. A Vehicle has been deleted!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  VehicleTree() {
    this.route.navigateByUrl('/VehicleTreeManagement')
  }

}

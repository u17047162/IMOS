import { id } from 'date-fns/locale';
import { UpdateVehicleTypeComponent } from './update-vehicle-type/update-vehicle-type.component';
import { ServiceService, vehicletype, vehiclemake } from './../../services/service.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddVehicleTypeComponent } from './add-vehicle-type/add-vehicle-type.component';
import { VehicleModelComponent } from '../vehicle-model/vehicle-model.component';
import { VehicleBrandComponent } from '../vehicle-brand/vehicle-brand.component';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css'],
  template:' {{data.id}}',
})
export class VehicleTypeComponent implements OnInit {

  //API Test
  VehicleTypeData:vehicletype[]=[];

  info:vehiclemake[]=[];
  vehicleBrandData:vehiclemake[]=[];
  VehicleTypeId:number;
  
  displayedColumns: string[] = ['description', 'actions'];
  dataSource!: MatTableDataSource<vehicletype>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor( private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private _router: Router,
      private _service: ServiceService,
      private _snackBar: MatSnackBar
  ) { 
    this.GetAllTypes();
  
  }
  ngOnInit(): void {
 
  }

  openTypeDialog(id: number): void {
    const dialogRef = this.dialog.open(VehicleBrandComponent, {
      data:{id},
      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(id)

    });

  }

  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  GetAllTypes(){
    this._service.getVehicleTypes().subscribe(X=>{
      this.VehicleTypeData=X;
    
      console.log(this.VehicleTypeData);
      this.posts = X;

      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    })
  }

 


  openDialog(id:number): void {
    const dialogRef = this.dialog.open(AddVehicleTypeComponent
      , {
      width: '50%',
      height:'60%',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.getTypeByBrand(this.data.id);
    });
  }

  openUpdateDialog(id:number): void {
    const dialogRef = this.dialog.open(UpdateVehicleTypeComponent
      , {
      width: '50%',
      height:'60%',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.getTypeByBrand(this.data.id);
    });
  }

  deleteType(Id: number) {
    console.log(Id)
    if (confirm('Are you sure you want to delete this Vehicle Type?')) {
      this._service.deleteType(Id).subscribe(res => {
        this.deleteType(this.data.id);
        this._snackBar.open("Success, you have deleted a Vehicle Type!", 'OK', {
          
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }
}

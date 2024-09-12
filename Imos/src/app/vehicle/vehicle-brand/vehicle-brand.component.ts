import { id } from 'date-fns/locale';

import { MatSort } from '@angular/material/sort';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService, vehiclemake, vehicletype, vehiclemodel } from 'src/app/services/service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VehicleTypeComponent } from '../vehicle-type/vehicle-type.component';
import { UpdateVehicleBrandComponent } from './update-vehicle-brand/update-vehicle-brand.component';
import { AddVehicleBrandComponent } from './add-vehicle-brand/add-vehicle-brand.component';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { VehicleModelComponent } from '../vehicle-model/vehicle-model.component';

@Component({
  selector: 'app-vehicle-brand',
  templateUrl: './vehicle-brand.component.html',
  styleUrls: ['./vehicle-brand.component.css'],
  template:' {{data.id}}',

})
export class VehicleBrandComponent implements OnInit {

  //API Test
  
  info:vehiclemake[]=[];
  vehicleModelData:vehiclemodel[]=[];
  id:number;

  displayedColumns: string[] = ['BrandName', 'actions'];

  dataSource!: MatTableDataSource<vehiclemake>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private dialog: MatDialog,
    private MatDialog: MatDialogRef<VehicleBrandComponent>,
    private router: Router,
    private _service: ServiceService, private _snackBar: MatSnackBar) 
    {
        this.getBrandByType(this.data.id);
    console.log(data.id);
    this.id =data.id; 
    }

  ngOnInit(): void {
  }
    // VehicleModelComponent
    openModelTypeDialog(brandId:number):void{
      const dialogRef = this.dialog.open(VehicleModelComponent, {
        data:{brandId},
        width: '80%',
        height:'90%'
      }
      );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(brandId)

      });
  
    }

  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }


  openAddDialog(id:number):void{
    const dialogRef = this.dialog.open(AddVehicleBrandComponent, {
      width: '66%',
      height:'70%',
      data: {id}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
  //UpdateVehicleBrandComponent
  openUpdateDialog(id: number): void {
    const dialogRef = this.dialog.open(UpdateVehicleBrandComponent, {
      width: '66%',
      height:'70%',
      data:{id},
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  
  getBrandByType(id:number){
    this._service.getBrandByType(id).subscribe(o=>{
      this.info = o;
      console.log(this.info);
      this.posts = o;
      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  deleteVehicleBrand(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Vehicle Brand!')) {
      this._service.deleteBrand(id).subscribe(res => {
        //this.GetAllBrands();
        this._snackBar.open("Success, you have deleted Vehicle Brand!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }
}

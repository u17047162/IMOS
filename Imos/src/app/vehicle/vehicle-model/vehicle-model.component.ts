import { id } from 'date-fns/locale';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService, vehiclemodel } from 'src/app/services/service.service';
import { AddVehicleModelComponent } from './add-vehicle-model/add-vehicle-model.component';
import { UpdateVehicleModelComponent } from './update-vehicle-model/update-vehicle-model.component';

@Component({
  selector: 'app-vehicle-model',
  templateUrl: './vehicle-model.component.html',
  styleUrls: ['./vehicle-model.component.css'],
  template:' {{data.brandId}}',
})
export class VehicleModelComponent implements OnInit {

  info: vehiclemodel[] =[];
  brandId:number;

  displayedColumns: string[] = ['year','name', 'color', 'actions'];

  dataSource!: MatTableDataSource<vehiclemodel>;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  
  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{brandId:number},
     private router: Router,
      private _service: ServiceService,
      private MatDialog: MatDialogRef<VehicleModelComponent>,
       private _snackBar: MatSnackBar)
      {

        this.getModelsByBrands(this.data.brandId);
        console.log(data.brandId);
        this.brandId =data.brandId;
      }

  ngOnInit(): void {
  
     
  }

  getModelsByBrands(id:number){
    this._service.getByBrands(id).subscribe(o=>{
      this.info = o;
          console.log(this.info);
          this.posts = o;

          this.dataSource = new MatTableDataSource(this.posts)

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

    })
  }

  openDialog(id:number): void {
    const dialogRef = this.dialog.open(AddVehicleModelComponent
      , {
      width: '50%',
      height:'60%',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getModelsByBrands(this.data.brandId);
    });
  }


  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openUpdateDialog(id:number): void {
    const dialogRef = this.dialog.open(UpdateVehicleModelComponent
      , {
      width: '50%',
      height:'60%',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getModelsByBrands(this.data.brandId);
    });
  }

  

  
  deleteVehicleModel(Id: number) {
    console.log(Id);
    if (confirm('Are you sure you want to delete this Vehicle Model?')) {
      this._service.deleteModel(Id).subscribe(res => {
        this.getModelsByBrands(this.data.brandId);
        this._snackBar.open("Success, you have deleted a Vehicle Model!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }
}

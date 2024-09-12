import { ServiceService, vehiclemake, vehiclemodel, vehicletype } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { id } from 'date-fns/locale';

export interface Vehicle {
  vehicleId: number,
  brandId: number,
  name?: string,
  vehicletypeId: number,
  description?: string,
  modelId: number,
  year?: string,
  AssignedStatus: number,
  vehicletype: string,
  DatePurchased: string,
  status: string,
  imageUrl: string,
  vehiclemake: string,
  vehiclemodel: string,
}

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addForm!:FormGroup;
  Vehicletypes:vehicletype[]=[];
  VehicleModellist: vehiclemodel[] = [];
  VehicleBrandlist: vehiclemake[] = [];
  id!:number;

  constructor(
    private fb: FormBuilder,
    private _service:ServiceService,
    private _snackbar: MatSnackBar,
    private route: Router
  ) {

   }

  ngOnInit(): void {
    this.buildAddForm();
  }

  private buildAddForm()
  {
    this.addForm=this.fb.group({
      brandId: ['', [Validators.required]],
      vehicletypeId: ['', [Validators.required]],
      modelId: ['', [Validators.required]],
      datePurchased: ['', [Validators.required]],
    });
    this._service.getVehicleTypes().subscribe(data=>{
      this.Vehicletypes=data;
    });
  }
  
  AddVehicle(){
    if(this.addForm.valid){
      console.log(this.addForm.value);
      this._service.addVehicle(this.addForm.value)
      .subscribe(
        res => {
          if (confirm('Are you sure you want to Add this Vehicle?')) {
            this._snackbar.open("Success, you have Add a Vehicle!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
          else{
            this._snackbar.open("Unsuccessful", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
        });
    }
  }

 getTypeByMake(id:number)
 {
  this._service.getBrandByType(id).subscribe(data=>{
    this.VehicleBrandlist=data;
  });
 }
 getModelsByBrand(id:number)
 {
  this._service.getModelByBrands(id).subscribe(data=>{
    this.VehicleModellist=data;
  });
 }
  back(){
    this.route.navigateByUrl('/vehicle')
  }

public hasError = (controlName: string, errorName: string) => {
  return this.addForm.controls[controlName].hasError(errorName);
}

}

import { MatSnackBar } from '@angular/material/snack-bar';
import { vehicle, vehiclemake, vehiclemodel, vehicletype } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})

export class UpdateVehicleComponent implements OnInit {

  updateForm:FormGroup;
  Vehicle!:vehicle;
  id!:number;
  Vehicletypes:vehicletype[]=[];
  VehicleModellist: vehiclemodel[] = [];
  VehicleBrandlist: vehiclemake[] = [];

  constructor(private fb: FormBuilder, private _service:ServiceService,
    private route: ActivatedRoute,private router:Router,private http:HttpClient, 
    private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    const formOptions:AbstractControlOptions={};
    this.updateForm=this.fb.group({
      brandId: ['', [Validators.required]],
      modelId: ['', [Validators.required]],
      datePurchased: ['', [Validators.required]],
      vehicletypeId: ['', [Validators.required]]
    }, formOptions);

    this.id=+this.route.snapshot.params['id'];
    this._service.getVehicleById(this.id).subscribe((res:any)=>{
      this.Vehicle=res;
      console.log(this.Vehicle);
      this.updateForm=this.fb.group({
        brandId: ['', [Validators.required]],
        modelId: ['', [Validators.required]],
        datePurchased: ['', [Validators.required]],
        vehicletypeId: ['', [Validators.required]]
      }, formOptions)
    });

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

  onSubmit(){
    if(this.updateForm.valid)
    {
    this._service.updateVehicle(this.route.snapshot.params['id'],this.updateForm.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Update this Vehicle?')) {
            this._snackbar.open("Success, you have Update a Vehicle!", 'OK', {
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
      })
    }
  }
  
  Cancel(){
    this.router.navigateByUrl('vehicle')
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.updateForm.controls[controlName].hasError(errorName);
  }
}

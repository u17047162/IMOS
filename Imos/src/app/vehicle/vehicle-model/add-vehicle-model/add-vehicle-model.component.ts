import { id } from 'date-fns/locale';
import { vehiclemodel, vehiclemake } from './../../../services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService, vehicletype } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-vehicle-model',
  templateUrl: './add-vehicle-model.component.html',
  styleUrls: ['./add-vehicle-model.component.css'],
  template:' {{data.id}}',
})
export class AddVehicleModelComponent implements OnInit {

observeTypes: Observable<vehiclemodel[]> = this._service.getAllModelTypes();

public addModelFormGroup!: FormGroup;
requestData:vehiclemodel[]=[];
VehicleBrands:vehiclemake[]=[];

posts: any;
id:number;


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<AddVehicleModelComponent>,
    private router: Router,private _service: ServiceService,
    private _snackBar: MatSnackBar)
    { 
      this.id = data.id;
          console.log(this.data.id);
    }

  ngOnInit(): void {
    this.BuildAddModelsForm();

  }

  getVehicleBrands(){
    this._service.getAllBrands()
      .subscribe(x => {
        this.VehicleBrands = x;
        console.log(this.VehicleBrands);
          this.posts = x;
      })


  }

  public BuildAddModelsForm(){
    this.addModelFormGroup=this.fb.group({
      Name: ['',[Validators.required]],
      Year: ['',[Validators.required]],//
      //vehicletypeId: ['',[Validators.required]],
      Color: ['',[Validators.required]],//
    });


  }

 


  AddModelType(Id:number){
    if(this.addModelFormGroup.valid){
      console.log(this.addModelFormGroup.value)
      this._service.addModel(this.addModelFormGroup.value,Id)
      .subscribe(() => {
        this.addModelFormGroup.reset();
        this._snackBar.open(`Add Vehicle Model successful`, 'Ok', {duration: 5000});
        this.MatDialog.close();

      }, (response: HttpErrorResponse) => {
        if (response.status === 403) {
          this._snackBar.open(response.error, 'X', {duration: 5000});
        }
        if (response.status === 500){
          this._snackBar.open(response.error, 'X', {duration: 5000});
        }
      })
    }
  }
  changeType(e: any) {
    console.log(e.target.value)
    this.addModelFormGroup.patchValue({
      brandId: e.target.value
    })
  }

  back(){
    
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addModelFormGroup.controls[controlName].hasError(errorName);
  }

}

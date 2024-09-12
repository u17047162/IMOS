import { vehicletype, vehiclemake } from './../../../services/service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-vehicle-type',
  templateUrl: './add-vehicle-type.component.html',
  styleUrls: ['./add-vehicle-type.component.css']
})
export class AddVehicleTypeComponent implements OnInit {

public AddTypeFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private MatDialog: MatDialogRef<AddVehicleTypeComponent>,
    private router: Router,
     private _service: ServiceService,
     private _snackBar: MatSnackBar) 
    { 
      
    }

  ngOnInit(): void {
    this.BuildAddTypeForm();

  }

  public BuildAddTypeForm(){
    this.AddTypeFormGroup = this.fb.group({
      Description: ['',[Validators.required]]
    })
  }

  AddBVehicleType(){
    if(this.AddTypeFormGroup.valid){
      this._service.addVehicleType(this.AddTypeFormGroup.value)
      .subscribe(res=>{
        this.AddTypeFormGroup.reset();
        if (confirm('Are you sure you want to Add this Vehicle Type!')) {
          this._snackBar.open("Success, you have Added Vehicle Type!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
          this.MatDialog.close();
          this.AddTypeFormGroup.reset();
          this.router.navigateByUrl('VehicleTreeManagement')
        }
        else {
          this._snackBar.open("Unsuccessful", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }

      })
    }
  }
     

  
  /*
     

        
        this.AddTypeFormGroup.reset();
        this.snackBar.open('Add Vehicle  Type Successful', 'Ok',
         {duration:5000} );
         this.MatDialog.close();
      this.router.navigateByUrl('VehicleTreeManagement')
      }),
      (response: HttpErrorResponse) => {
        if (response.status === 403) {
          this.snackBar.open(response.error, 'X', {duration: 5000});
        }
        if (response.status === 500){
          this.snackBar.open(response.error, 'X', {duration: 5000});
        }
      }

  */

      back(){
        this.router.navigateByUrl("VehicleTreeManagement")
      }

  public hasError = (controlName: string, errorName: string) => {
    return this.AddTypeFormGroup.controls[controlName].hasError(errorName);
  }
}

import { id } from 'date-fns/locale';
import { ServiceService, vehicletype } from './../../../services/service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-vehicle-type',
  templateUrl: './update-vehicle-type.component.html',
  styleUrls: ['./update-vehicle-type.component.css'],
  template:' {{data.id}}',

})
export class UpdateVehicleTypeComponent implements OnInit {

  public UpdateTypesFormGroup!: FormGroup;
  
  hide: boolean = false;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<UpdateVehicleTypeComponent>,
    private router: Router,
     private _service: ServiceService,
     private snackBar: MatSnackBar)
    { 
     
      console.log(this.data.id);
    }

  ngOnInit(): void {
   this.buildUpdateTypesFormWithEmptyFields();

  }

  public buildUpdateTypesFormWithEmptyFields(){
    this.UpdateTypesFormGroup = this.fb.group({
      Description: ['',[Validators.required]]
    });
  }

  private buildUpdateTypesForm(role: vehicletype){
    this.UpdateTypesFormGroup = this.fb.group({
      Description: [role.description, [Validators.required]],
    })
}


UpdateVehicleType(){
  let Id =this.data.id
  if(this.UpdateTypesFormGroup.valid){
    this._service.updateVehicleType(this.UpdateTypesFormGroup.value,Id)
    .subscribe(() => {
      this.MatDialog.close();
      this.UpdateTypesFormGroup.reset();
      this.snackBar.open('Update Vehicle Type Successful', 'X', {duration:5000} )
    })
  }
}

closeAlert(){
  this.hide = false;
}

public hasError = (controlName: string, errorName: string) => {
  return this.UpdateTypesFormGroup.controls[controlName].hasError(errorName);
}


}

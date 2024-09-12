import { ServiceService, vehiclemodel } from './../../../services/service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-vehicle-model',
  templateUrl: './update-vehicle-model.component.html',
  styleUrls: ['./update-vehicle-model.component.css'],
  template:' {{data.id}}'
})
export class UpdateVehicleModelComponent implements OnInit {

  public UpdateModelFormGroup!: FormGroup;

  id:number;
  TypyListData: vehiclemodel[];

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<UpdateVehicleModelComponent>,
    private router: Router,
     private service: ServiceService,
     private snackBar: MatSnackBar ) { 
      this.id = data.id;
      console.log(this.data.id);
     }

  ngOnInit(): void {
    this.id = this.data.id;
    this.buildUpdateFormWithEmptyFields();
  }
  public buildUpdateFormWithEmptyFields(){
    this.UpdateModelFormGroup = this.fb.group({
      Name: ['',[Validators.required]],
      Year: ['',[Validators.required]],//
      //vehicletypeId: ['',[Validators.required]],
      Color: ['',[Validators.required]],//
    });
  }
  private buildUpdateForm(role: vehiclemodel){
    this.UpdateModelFormGroup = this.fb.group({
      Name: [role.name, [Validators.required]],
      Year: [role.year, [Validators.required]],
      Color: [role.color, [Validators.required]]
    })
}
updateVehicleModel(id:number){
  this.id = this.data.id;
  console.log(this.id)

  if(this.UpdateModelFormGroup.valid){
    this.service.updateModelInBrand(this.UpdateModelFormGroup.value, id)
    .subscribe(() => {
      this.MatDialog.close();
      this.snackBar.open('Update Vehicle Model Brand  Successful', 'X', {duration:5000} )
    })
  }

}
public hasError = (controlName: string, errorName: string) => {
  return this.UpdateModelFormGroup.controls[controlName].hasError(errorName);
}
back(){
  
}



}

import { id } from 'date-fns/locale';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService, vehiclemake } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-vehicle-brand',
  templateUrl: './update-vehicle-brand.component.html',
  styleUrls: ['./update-vehicle-brand.component.css'],
  template:' {{data.id}}'
})
export class UpdateVehicleBrandComponent implements OnInit {

  hide: boolean = false;

  public UpdateBrandFormGroup!: FormGroup;
  id:number;
  APIData:vehiclemake[];

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<UpdateVehicleBrandComponent>,
    private router: Router,
     private _service: ServiceService,
     private _snackBar: MatSnackBar
  ) { 
    this.id=data.id;
    console.log(this.data.id);
  }

  ngOnInit(): void {
    this.id=this.data.id;
    this.buildUpdateBrandFormWithEmptyFields();
  }

  public buildUpdateBrandFormWithEmptyFields(){
    this.UpdateBrandFormGroup = this.fb.group({
      Name: ['',[Validators.required]],
  });
}
private buildUpdateBrandForm(role:vehiclemake){
  this.UpdateBrandFormGroup = this.fb.group({
    Name: [role.name, [Validators.required]],
  })
}
UpdateBrand(id:number){
 
  this.id = this.data.id;
  console.log(this.id)
  if(this.UpdateBrandFormGroup.valid){
    console.log(this.UpdateBrandFormGroup.value)

   this._service.updateBrand(this.UpdateBrandFormGroup.value,id).subscribe(()=>{
      this.MatDialog.close();
      this.UpdateBrandFormGroup.reset();
      this._snackBar.open('Update Brand Successful', 'Ok', 
      {duration:5000} )
    });
  }
  else{
    this._snackBar.open("Unsuccessful", 'OK', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
}

closeAlert(){
  this.hide = false;
}

public hasError = (controlName: string, errorName: string) => {
  return this.UpdateBrandFormGroup.controls[controlName].hasError(errorName);
}

}

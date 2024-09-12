import { id } from 'date-fns/locale';
import { ServiceService, vehicletype, vehiclemake } from 'src/app/services/service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-vehicle-brand',
  templateUrl: './add-vehicle-brand.component.html',
  styleUrls: ['./add-vehicle-brand.component.css'],
    template:' {{data.id}}',
})

export class AddVehicleBrandComponent implements OnInit {

  observeVehicleTypes: Observable<vehiclemake[]> = this._service.getAllBrands();
  addBrandFormGroup:FormGroup;
  brandListData:vehiclemake[]=[];
  TypeListData:vehicletype[]=[];
  posts:any;
  id:number;
  Name: any;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<AddVehicleBrandComponent>,
    private router: Router,private _service: ServiceService,
    private _snackBar: MatSnackBar)
    {
      this.id = data.id;
      console.log(this.data.id);
    }


  ngOnInit(): void {
    this.buildAddBrandForm();
  }


  public buildAddBrandForm(){
    this.addBrandFormGroup=this.fb.group({
      Name: ['',[Validators.required]],
    })

  }

  getAllTypes(){
    this._service.getTypes()
    .subscribe(x => {
      this.TypeListData = x;
        this.posts = x;
        console.log(this.posts)
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addBrandFormGroup.controls[controlName].hasError(errorName);
  }

  changeType(e: any) {
    console.log(e.target.value)
    this.addBrandFormGroup.patchValue({
      id: e.target.value
    })
  }
  
  AddBrand(Id:number){ 
    console.log(Id)
    if(this.addBrandFormGroup.valid){
      console.log(this.addBrandFormGroup.value)
      this._service.addBrand(this.addBrandFormGroup.value,Id)
      .subscribe(() => {
        this.addBrandFormGroup.reset();
        //this.MatDialog.close();
        this._snackBar.open(`Add Vehicle Brand successful`, 'Ok', {duration: 5000});
              //  this.router.navigateByUrl('clientrequest')
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

  get formdet(){
    return this.addBrandFormGroup.controls;
}
  
  back(){
    this.router.navigateByUrl("VehicleTreeManagement")
 
    
  }
  

}

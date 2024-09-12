import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService, safetyitemcategory } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-safty-checklist-catagory',
  templateUrl: './update-safty-checklist-catagory.component.html',
  styleUrls: ['./update-safty-checklist-catagory.component.css'],
  template:' {{data.id}}'
})
export class UpdateSaftyChecklistCatagoryComponent implements OnInit {

  public UpdateCategortTypeFormGroup!: FormGroup;
  hide:boolean;
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<UpdateSaftyChecklistCatagoryComponent>,
    private router: Router,
     private _service: ServiceService,
     private _snackBar: MatSnackBar) {

      console.log(this.data.id);
      }

  ngOnInit(): void {
  }
  public buildCategoryFormWithEmptyFields(){
    this.UpdateCategortTypeFormGroup = this.fb.group({
      name: ['',[Validators.required]],
    })
  }
  private buildUpdateCategoryTypeForm(role: safetyitemcategory){
    this.UpdateCategortTypeFormGroup = this.fb.group({
      name: [role.name, [Validators.required]]
    })
  }
  UpdateCategoryType(){
    let Id=this.data.id;
    if(this.UpdateCategortTypeFormGroup.valid){
      this._service.updateCategoryType(this.UpdateCategortTypeFormGroup.value,Id)
      .subscribe(res=>{
        if (confirm('Are you sure you want to update this Category Type!')) {
          this._snackBar.open("Success, you have Updated  Category Type!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
       
        }
        else{
          this._snackBar.open("Unsuccessful", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }

      })
    }
  }
  back(){

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.UpdateCategortTypeFormGroup.controls[controlName].hasError(errorName);
  }


}

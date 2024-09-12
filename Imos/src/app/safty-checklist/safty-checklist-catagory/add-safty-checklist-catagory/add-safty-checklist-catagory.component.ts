import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-safty-checklist-catagory',
  templateUrl: './add-safty-checklist-catagory.component.html',
  styleUrls: ['./add-safty-checklist-catagory.component.css']
})
export class AddSaftyChecklistCatagoryComponent implements OnInit {

  SafetyCategoryFrm: FormGroup=this.fb.group({
    categoryName: ['',[Validators.required]],

  })
  alert: boolean = false;


  constructor(private _service: ServiceService, 
    private MatDialog: MatDialogRef<AddSaftyChecklistCatagoryComponent>,
    private fb:FormBuilder,
    private router: Router,private _snackBar:MatSnackBar) { 

  }

  ngOnInit(): void {
  
  }

  addCategoryType(){ //
    if(this.SafetyCategoryFrm.valid){
      let payload:any={}
      payload['Name'] = this.SafetyCategoryFrm.get('categoryName')?.value;

     this._service.addSafetyCategory(payload).subscribe(res=>{
      if (confirm('Are you sure you want to Add this Category Type!')) {
        this._snackBar.open("Success, you have Add a Category Type!", 'OK', {
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
    
  closeAlert() {
    this.alert = false;
  }

  back(){
    this.router.navigateByUrl("/saftyChecklistCatagory")
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.SafetyCategoryFrm.controls[controlName].hasError(errorName);
  }
}

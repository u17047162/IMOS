import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { safetyItem, ServiceService } from 'src/app/services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css'],
  template:' {{data.id}}'
})
export class UpdateItemsComponent implements OnInit {

  public updateForm!:FormGroup;
  requestData:safetyItem[];
  id:number;


  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:{id:number},
  private MatDialog:MatDialogRef<UpdateItemsComponent>,private router:Router, private _service:ServiceService,
 private snackbar:MatSnackBar )
  {
    this.id=data.id;
   // console.log(this.data.id);

   }

   ngOnInit(): void {
    this.id=this.data.id;
  }

   public buildUpdateFormWithEmptyFields(){
    this.updateForm=this.fb.group({
      name: ['',[Validators.required]],
    });
   }

   private buildUpdateForm(role:safetyItem){
    this.updateForm=this.fb.group({
      name: [role.name, [Validators.required]],
    })
   }

   UpdateItem(id:number){
    let Id=this.data.id;
    this.id=this.data.id;
   // console.log(this.id)
   if(this.updateForm.valid){
    this._service.updateItem(this.updateForm.value,id).subscribe(()=>{
      this.MatDialog.close();
      this.snackbar.open('Update Request Successful', 'X',
       {duration:5000})
    });
   }
   else{
    this.snackbar.open("Unsuccessful", 'OK', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
   }

}

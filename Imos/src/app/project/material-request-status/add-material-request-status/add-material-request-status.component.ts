import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import {MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,ClientRequest } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-material-request-status',
  templateUrl: './add-material-request-status.component.html',
  styleUrls: ['./add-material-request-status.component.css']
})
export class AddMaterialRequestStatusComponent implements OnInit {

  AddRequestStatusFormGroup: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar,
      private MatDialog: MatDialogRef<AddMaterialRequestStatusComponent>,) { }


  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.AddRequestStatusFormGroup.controls[controlName].hasError(errorName);
    this.snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
  }

  AddRequestStatus(){
    if(this.AddRequestStatusFormGroup.valid)
    {
      this.service.addRequestStatus(this.AddRequestStatusFormGroup.value)
      .subscribe(() => {
        this.AddRequestStatusFormGroup.reset();
        this.snackBar.open(`Successfully added a material request status`, 'X', {duration: 5000});
        this.MatDialog.close();
      },
      (response: HttpErrorResponse) =>{
        if (response.status === 403) {
          this.snackBar.open(response.error, 'X', {duration: 5000});
        }
        if (response.status === 500){
          this.snackBar.open(response.error, 'X', {duration: 5000});
        }
      }
      )
    }

    else {
      this.snackBar.open(`Invalid Form! Enter all inputs`, 'X', {duration: 5000});
    }
  }
}


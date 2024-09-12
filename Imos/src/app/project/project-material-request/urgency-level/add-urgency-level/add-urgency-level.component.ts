import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import {MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,ClientRequest } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-add-urgency-level',
  templateUrl: './add-urgency-level.component.html',
  styleUrls: ['./add-urgency-level.component.css']
})
export class AddUrgencyLevelComponent implements OnInit {

  AddUrgencylvlFormGroup: FormGroup = this.fb.group({
    level: ['',[Validators.required]],
    description: ['',[Validators.required]]
  })


  constructor(private fb: FormBuilder,
    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar,
      private MatDialog: MatDialogRef<AddUrgencyLevelComponent>,) { }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.AddUrgencylvlFormGroup.controls[controlName].hasError(errorName);
    this.snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
  }


  AddUrgencylvl(){
    if(this.AddUrgencylvlFormGroup.valid)
    {
      this.service.addUrgencylvl(this.AddUrgencylvlFormGroup.value)
      .subscribe(() => {
        this.AddUrgencylvlFormGroup.reset();
        this.snackBar.open(`Successfully added a Urgency level`, 'X', {duration: 5000});
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
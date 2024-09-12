import { Component, Inject, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import {MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,ClientRequest } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { AddUrgencyLevelComponent } from '../../project-material-request/urgency-level/add-urgency-level/add-urgency-level.component';

@Component({
  selector: 'app-add-project-incident',
  templateUrl: './add-project-incident.component.html',
  styleUrls: ['./add-project-incident.component.css']
})
export class AddProjectIncidentComponent implements OnInit {

  AddFormGroup: FormGroup = this.fb.group({
    Description: ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar,
      private MatDialog: MatDialogRef<AddProjectIncidentComponent>) {
        console.log(this.data.id)
       }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.AddFormGroup.controls[controlName].hasError(errorName);
    this.snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
  }

  AddIncident(){
    if(this.AddFormGroup.valid)
    {
      this.service.addIncident( this.AddFormGroup.value,this.data.id)
      .subscribe(() => {
        this.AddFormGroup.reset();
        this.snackBar.open(`Successfully added an Incident`, 'X', {duration: 5000});
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

import { Component, Inject, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import {MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,UrgencyLevel } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-update-project-incident',
  templateUrl: './update-project-incident.component.html',
  styleUrls: ['./update-project-incident.component.css']
})
export class UpdateProjectIncidentComponent implements OnInit {

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
    private service: ServiceService,
    private snackBar: MatSnackBar,
    private MatDialog: MatDialogRef<UpdateProjectIncidentComponent>,) { }


    UpdateForm: FormGroup = this.fb.group({
      Description: ['',[Validators.required]],

    });

    public hasError = (controlName: string, errorName: string) =>{
      return this.UpdateForm.controls[controlName].hasError(errorName);
      this.snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
    }


    updateIncident(){
      console.log(this.data.id)

      if(this.UpdateForm.valid){

        this.service.updateIncident(this.UpdateForm.value,this.data.id)
        .subscribe(() => {

          this.MatDialog.close();
              this.snackBar.open('Update Incident  Successful', 'X', {duration:5000} )
        })
      }

      else{
        this.snackBar.open(`Invalid Form! Enter all inputs`, 'X', {duration:5000} )
      }

      }

  ngOnInit(): void {
  }

}

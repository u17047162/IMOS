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

@Component({
  selector: 'app-confirm-assignment-removal',
  templateUrl: './confirm-assignment-removal.component.html',
  styleUrls: ['./confirm-assignment-removal.component.css']
})
export class ConfirmAssignmentRemovalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar,
      private MatDialog: MatDialogRef<ConfirmAssignmentRemovalComponent>,
  ) {

    console.log(this.data.id)
  }

  ngOnInit(): void {
  }


 ConfirmRemoval(){
      this.service.RemoveVehicleAssign(this.data.id)
      .subscribe(() => {

        this.snackBar.open(`Successfully removed vehicle assignment `, 'X', {duration: 5000});
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


  Cancel()
  {
    this.MatDialog.close();
  }

}

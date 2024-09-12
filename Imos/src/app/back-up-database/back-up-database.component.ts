import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewMatarialRequest,MaterialRequestStatus,ServiceService} from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-back-up-database',
  templateUrl: './back-up-database.component.html',
  styleUrls: ['./back-up-database.component.css']
})
export class BackUpDatabaseComponent implements OnInit {
  filepath: FormGroup;



  constructor(@Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private dialog: MatDialog,) { }

    public hasError = (controlName: string, errorName: string) =>{
      return this.filepath.controls[controlName].hasError(errorName);
      this._snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
    }


  ngOnInit(): void {

    this.filepath = this.fb.group({
      filepath: ['',[Validators.required]],
    })
  }


  BackUpDatabase(){


      this.service.BackUpDataBaseSP()
      .subscribe(() => {

        this._snackBar.open(`Successfully Backed-Up Database`, 'X', {duration: 5000});

      },
      (response: HttpErrorResponse) =>{
        if (response.status === 403) {
          this._snackBar.open(response.error, 'X', {duration: 5000});
        }
        if (response.status === 500){
          this._snackBar.open(response.error, 'X', {duration: 5000});
        }
      }
      )

  }




openDialog(): void {

  if(this.filepath.valid){

    const dialogRef = this.dialog.open(ConfirmDialogComponent
      , {
      width: '35%',
      height:'26%',
      data: {filepath:this.filepath.controls['filepath'].value }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


      console.log(this.filepath.controls['filepath'].value)

    });
  }

else{
this._snackBar.open('Please Enter the file path', 'X',
{duration:5000} )
}

  }





}

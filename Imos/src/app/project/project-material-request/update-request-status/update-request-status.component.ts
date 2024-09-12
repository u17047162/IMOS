import { HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewMatarialRequest,MaterialRequestStatus} from 'src/app/services/service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import{material, ServiceService, UrgencyLevel,materialRequest} from 'src/app/services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-update-request-status',
  templateUrl: './update-request-status.component.html',
  styleUrls: ['./update-request-status.component.css']
})
export class UpdateRequestStatusComponent implements OnInit {

  observeRequestStatus: Observable<MaterialRequestStatus[]> = this.service.getMaterialRequestStatus();

  form: FormGroup;

  materialRequestData: MaterialRequestStatus[];
  materialRequestId: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.observeRequestStatus.subscribe(x => {
      this.materialRequestData = x;
      console.log(this.materialRequestData)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
    }
    );

    this.form= this.formBuilder.group({
      name : ['',Validators.required],
    })
  }

  get StatusId(){
    return this.form.get('name')
  }


  ManageRequest(){


    if(this.form.valid){

      const data ={
        projectmaterialrequestId: this.data.id,
        projectmaterialrequeststatusId: this.form.controls['name'].value
      }

     /* this.data.id;
      this.form.controls['name'].value;*/
      console.log(data)

      this.service.ManageRequestStatus(data)
      .subscribe(() => {
        this._snackBar.open('Material Request Status Successfully Updated', 'X',
         {duration:5000} )

      } )
    }

   }

   ChangeMaterialRequestStatus(e:any){
    this.form.patchValue({
         id: e.target.value
       })
   }


}

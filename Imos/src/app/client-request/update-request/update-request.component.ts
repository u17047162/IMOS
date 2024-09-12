
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,ClientRequest } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { ClientRequestComponent } from '../client-request.component';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css'],
  template:' {{data.id}}',
})
export class UpdateRequestComponent implements OnInit {

  public UpdateRequestFormGroup!: FormGroup;
  id:number;
  requestdata: ClientRequest[];

  constructor( private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<UpdateRequestComponent>,
    private router: Router,
     private service: ServiceService,
     private snackBar: MatSnackBar) 
     {
      this.id = data.id;
      console.log(this.data.id);
      }

  ngOnInit(): void {
    this.id = this.data.id;
    this.buildUpdateRequestFormWithEmptyFields();
  }


  public buildUpdateRequestFormWithEmptyFields(){
    this.UpdateRequestFormGroup = this.fb.group({
      DESCRIPTION: ['',[Validators.required]]
    });
  }

  private buildUpdateRequestForm(role: ClientRequest){
      this.UpdateRequestFormGroup = this.fb.group({
        DESCRIPTION: [role.DESCRIPTION, [Validators.required]],
      })
  }

  UpdateRequest(id: number){
    let Id =this.data.id
    this.id = this.data.id;
    console.log(this.id)
    if(this.UpdateRequestFormGroup.valid){
      this.service.updateRequest(this.UpdateRequestFormGroup.value, id)
      .subscribe(() => {
        this.MatDialog.close();
        this.snackBar.open('Update Request Successful', 'X', {duration:5000} )
      })
    }
  }
  
public hasError = (controlName: string, errorName: string) => {
  return this.UpdateRequestFormGroup.controls[controlName].hasError(errorName);
}



}

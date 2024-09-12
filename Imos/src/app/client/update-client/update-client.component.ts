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
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css'],
  template:' {{data.id}}',
})
export class UpdateClientComponent implements OnInit {

  public UpdateClientFormGroup!: FormGroup;


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<UpdateClientComponent>,
    private router: Router,
     private service: ServiceService,
     private snackBar: MatSnackBar) {

      console.log(this.data.id);
     }

  ngOnInit(): void {
    this.buildUpdateRequestFormWithEmptyFields();

  }
  public buildUpdateRequestFormWithEmptyFields(){
    this.UpdateClientFormGroup = this.fb.group({
      CLIENTNAME: ['',[Validators.required]],
      CLIENTEMAIL: ['',[Validators.email, Validators.required ]],
      CONTACTNUMBER: ['',[Validators.required]]
    });
  }

  private buildUpdateRequestForm(role: client){
    this.UpdateClientFormGroup = this.fb.group({
      CLIENTNAME: [role.CLIENTNAME, [Validators.required]],
      CLIENTEMAIL: [role.CLIENTEMAIL,[Validators.email, Validators.required ]],
      CONTACTNUMBER: [role.CONTACTNUMBER,[Validators.required]]
    })
}

UpdateClient(){
  let Id = this.data.id;
  if(this.UpdateClientFormGroup.valid){

    this.service.updateclient(this.UpdateClientFormGroup.value, Id )
    .subscribe(() => {
      this.MatDialog.close();
      this.UpdateClientFormGroup.reset();
      this.snackBar.open('Update Client Successful', 'X', {duration:5000} )
    })
  }
}

}

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
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {


AddClientFormGroup: FormGroup = this.fb.group({
  CLIENTNAME: ['',[Validators.required]],
  CLIENTEMAIL: ['',[Validators.required, Validators.email]],
  CONTACTNUMBER:  ['',[Validators.required]],
})

  constructor(private fb: FormBuilder,
    private MatDialog: MatDialogRef<AddClientComponent>,

    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  AddClient(){

    if(this.AddClientFormGroup.valid)
    {
      this.service.addclient(this.AddClientFormGroup.value)
      .subscribe(() => {
        this.AddClientFormGroup.reset();
        this.snackBar.open(`Add Client successful`, 'X', {duration: 5000});
        this.MatDialog.close();

      }, (response: HttpErrorResponse) => {
        if (response.status === 403) {
          this.snackBar.open(response.error, 'X', {duration: 5000});
        }
        if (response.status === 500){
          this.snackBar.open(response.error, 'X', {duration: 5000});
        }
      })
    }

  }

}

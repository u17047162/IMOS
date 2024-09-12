import { Observable } from 'rxjs';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,ClientRequest } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { ClientRequestComponent } from '../client-request.component';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
  template:' {{data.id}}',
})
export class AddRequestComponent implements OnInit {

observeClients: Observable<ClientRequest[]> = this.service.getRequest();
public AddRequestFormGroup!: FormGroup;
RequestData:ClientRequest[] =[];
clientdata:client[] = [];
posts: any;
id:number;



  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private MatDialog: MatDialogRef<AddRequestComponent>,
    private router: Router,
     private service: ServiceService,
     private snackBar: MatSnackBar)
      {
          this.id = data.id;
          console.log(this.data.id);
     }


     
     getClients(){
      this.service.getClients()
      .subscribe(x => {
        this.clientdata = x;
        console.log(this.clientdata);
          this.posts = x;
      })
    }


  ngOnInit(): void {
    this.BuildAddRequestForm();


    /*this.service.getClients().subscribe(y => {
      this.clientdata = y;
      console.log(this.clientdata)

    })*/

  }

  public BuildAddRequestForm(){
    this.AddRequestFormGroup = this.fb.group({
    //  CLIENT_ID :[this.data.id,[Validators.required]],
      DESCRIPTION: ['',[Validators.required]]
    })
  }


    AddRequest(Id: number){
      if(this.AddRequestFormGroup.valid){
        this.service.addRequest(this.AddRequestFormGroup.value, Id)
        .subscribe(() => {
          this.AddRequestFormGroup.reset();
          this.MatDialog.close();
          this.snackBar.open('Add Request Successful', 'X',
           {duration:5000} )



        //  this.router.navigateByUrl('clientrequest')
        })
      }
    }

    changeClient(e: any) {
      console.log(e.target.value)
      this.AddRequestFormGroup.patchValue({
        clientId: e.target.value
      })
    }





}



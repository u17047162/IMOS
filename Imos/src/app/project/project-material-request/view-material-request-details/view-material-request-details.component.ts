import { RequestNoteComponent } from './../request-note/request-note.component';
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
  selector: 'app-view-material-request-details',
  templateUrl: './view-material-request-details.component.html',
  styleUrls: ['./view-material-request-details.component.css'],
  template:' {{data.id}}',
})
export class ViewMaterialRequestDetailsComponent implements OnInit {

observeRequestStatus: Observable<MaterialRequestStatus[]> = this.service.getMaterialRequestStatus();

form: FormGroup;

materialRequestData: MaterialRequestStatus[];

  info: ViewMatarialRequest[] = [];

  displayedColumns: string[] = ['materialName','materialTypeName', 'quantity', 'description'];

  dataSource!: MatTableDataSource<ViewMatarialRequest>;

  materialRequestId: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: ViewMatarialRequest[];


  constructor( @Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
  private dialog: MatDialog,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,)

    {
      this.ViewMaterialRequest(this.data.id);
      console.log(this.data.id);
    }


    ViewMaterialRequest(id:number ){

      this.service.getMaterialRequetsDetails(id)
      .subscribe( x => {
        this.posts = x;

        this.dataSource = new MatTableDataSource(this.posts)

        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      })
    }

    applyFilter(event: Event) {
      const FilterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage()
      }
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

  id = this.data.id;



  ChangeMaterialRequestStatus(e:any){
    this.form.patchValue({
         id: e.target.value
       })
   }


   openViewNoteDialog(id:number): void {
    const dialogRef = this.dialog.open(RequestNoteComponent, {
      width: '40%',
      height:'70%',
      data:{id}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ViewMaterialRequest(this.data.id);

    });
  }

}

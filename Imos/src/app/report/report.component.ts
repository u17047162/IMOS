import { ProjectManagementReportComponent } from './project-management-report/project-management-report.component';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewMatarialRequest,MaterialRequestStatus,ServiceService, project} from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MaterialRequestReportViewComponent } from './material-request-report-view/material-request-report-view.component';
import { RequestcountreportComponent } from './requestcountreport/requestcountreport.component';
import {ApprovedRequestReportViewComponent} from './approved-request-report-view/approved-request-report-view.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { ListOfIncidentsReportComponent } from './list-of-incidents-report/list-of-incidents-report.component';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { AllRequestControlReportComponent } from './all-request-control-report/all-request-control-report.component';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  observeRequestStatus: Observable<MaterialRequestStatus[]> = this.service.getMaterialRequestStatus();
  observeProjectName: Observable<project[]> = this.service.getProject();

  projectnameform: FormGroup;
ProjectData: project[];

projectForm: FormGroup;

  form: FormGroup;
  materialRequestData: MaterialRequestStatus[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private route: Router,
     private service: ServiceService,
      private _snackBar: MatSnackBar,
      private formBuilder: FormBuilder,
      private dialog: MatDialog,

  ) { }



  ngOnInit(): void {

    this.observeRequestStatus.subscribe(x => {
      this.materialRequestData = x;
      console.log(this.materialRequestData)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
    }
    );

    this.observeProjectName.subscribe(x => {
      this.ProjectData = x;
      console.log(this.ProjectData)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
    }
    );

    this.projectForm= this.formBuilder.group({
      name : ['',Validators.required],
    })

    this.form= this.formBuilder.group({
      name : ['',Validators.required],

    })
  }

  ChangeMaterialRequestStatus(e:any){
    this.form.patchValue({
         id: e.target.value
       })
   }

   ChangeProjectName(e:any){
    this.form.patchValue({
         id: e.target.value
       })
   }




   openRequestCountReportViewDialog(): void {
    const dialogRef = this.dialog.open(RequestcountreportComponent, {
      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openApprovedReportViewDialog(): void {
    const dialogRef = this.dialog.open(ApprovedRequestReportViewComponent, {
      width: '80%',
      height:'90%',
      data: {id:this.projectForm.controls['name'].value }
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openALLINCICENTSDialog(): void {
    const dialogRef = this.dialog.open(AllIncidentsComponent, {
      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openALlRequestDialog(): void {
    const dialogRef = this.dialog.open(AllRequestControlReportComponent, {
      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



  openTaskPerProjectDialog(): void {

    if(this.projectForm.valid){

      const dialogRef = this.dialog.open(ProjectTasksComponent
        , {
          width: '80%',
          height:'90%',
        data: {id:this.projectForm.controls['name'].value }
      });


      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');


        console.log(this.projectForm.controls['name'].value)

      });
    }
else{
  this._snackBar.open('Please Select Project Name', 'X',
  {duration:5000} )
}

    }


    openProjectManagementDialog(): void {

      if(this.projectForm.valid){

        const dialogRef = this.dialog.open(ProjectManagementReportComponent
          , {
            width: '80%',
            height:'90%',
          data: {id:this.projectForm.controls['name'].value }
        });


        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');


          console.log(this.projectForm.controls['name'].value)

        });
      }
  else{
    this._snackBar.open('Please Select Project Name', 'X',
    {duration:5000} )
  }

      }




  openIncidentPerProjectDialog(): void {

    if(this.projectForm.valid){

      const dialogRef = this.dialog.open(ListOfIncidentsReportComponent
        , {
          width: '80%',
          height:'90%',
        data: {id:this.projectForm.controls['name'].value }
      });


      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');


        console.log(this.projectForm.controls['name'].value)

      });
    }
else{
  this._snackBar.open('Please Select Project Name', 'X',
  {duration:5000} )
}

    }






   openDialog(): void {

    if(this.form.valid){

      const dialogRef = this.dialog.open(MaterialRequestReportViewComponent
        , {
          width: '80%',
      height:'90%',
        data: {id:this.form.controls['name'].value }
      });


      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');


        console.log(this.form.controls['name'].value)

      });
    }
else{
  this._snackBar.open('Please Select Status', 'X',
  {duration:5000} )
}

    }


}

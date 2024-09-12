import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientRequestComponent} from 'src/app/client-request/client-request.component'
import {ServiceService,TaskType,TaskStatus} from 'src/app/services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-manage-task-status',
  templateUrl: './manage-task-status.component.html',
  styleUrls: ['./manage-task-status.component.css']
})
export class ManageTaskStatusComponent implements OnInit {

observeTaskStatus: Observable<TaskStatus[]> = this.service.getTaskStatus();

statusData: TaskStatus[];

form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.observeTaskStatus.subscribe(x => {
      this.statusData = x;
      console.log(this.statusData)
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
        TaskId: this.data.id,
        TaskstatusId: this.form.controls['name'].value
      }

     /* this.data.id;
      this.form.controls['name'].value;*/
      console.log(data)

      this.service.ManageTaskStatus(data)
      .subscribe(() => {
        this._snackBar.open('Material Request Status Successfully Updated', 'X',
         {duration:5000} )

      } )
    }

   }


   ChangeTaskstatusID(e:any){
    this.form.patchValue({
         id: e.target.value
       })
   }

}

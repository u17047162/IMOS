
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { Component, ElementRef, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService,client,ClientRequest } from 'src/app/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import {TaskType} from 'src/app/services/service.service';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {



  TaskTypeData: TaskType[];
TasktypeId: string;
observeTaskTypes: Observable<TaskType[]> = this.service.getAllTaskselect();

form: FormGroup;

  AddFormGroup: FormGroup = this.fb.group({
    tasktypeId: ['',[Validators.required]],
    startdate: ['',[Validators.required]],

    enddate: ['',[Validators.required]],
    description: ['',[Validators.required]],
  })


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
    private service: ServiceService,
    private snackBar: MatSnackBar,
    private MatDialog: MatDialogRef<UpdateTaskComponent>,) { }

    public hasError = (controlName: string, errorName: string) =>{
      return this.AddFormGroup.controls[controlName].hasError(errorName);
      this.snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
    }


    UpdateTask(){
      if(this.AddFormGroup.valid)
      {
        console.log(this.AddFormGroup.value)
        this.service.updateTaskproject(this.data.id,this.AddFormGroup.value)
        .subscribe(() => {
          this.AddFormGroup.reset();
          this.snackBar.open(`Successfully updated a Task `, 'X', {duration: 5000});
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

      else {
        this.snackBar.open(`Invalid Form! Enter all inputs`, 'X', {duration: 5000});
      }
    }

  ngOnInit(): void {

    this.observeTaskTypes.subscribe( x => {
      this.TaskTypeData = x;
      console.log(this.TaskTypeData)
    },
    (err: HttpErrorResponse) =>{
      console.log(err)
    });

    console.log(this.data.id)

    this.form= this.fb.group({
      description: ['',Validators.required],
    })
  }

  ChangeTaskType(e:any){
    this.AddFormGroup.patchValue({
      tasktypeId: e.target.value
       })
   }


get TaskTypeId(){
  return this.form.get('description')

}

}

import { Component, OnInit, Input } from '@angular/core';
import { ServiceService, tasktype } from 'src/app/services/service.service';
import { AbstractControlOptions, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-task-type',
  templateUrl: './update-task-type.component.html',
  styleUrls: ['./update-task-type.component.css']
})
export class UpdateTaskTypeComponent implements OnInit {

  id!: number;
  Name1: any;
  Description1: any;
  public taskTypeFrm!: FormGroup;
  alert: boolean = false;
  @Input() type: any;
  TaskType: tasktype;


  constructor(
    private service: ServiceService, 
    private routed: ActivatedRoute, 
    private route: Router,
    private _snackbar: MatSnackBar,
    private fb: FormBuilder,
    private http: HttpClient,) { }

  ngOnInit(): void {

    const formOptions: AbstractControlOptions = {};

    this.taskTypeFrm = this.fb.group({
      Description: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,15}"), Validators.maxLength(15)]],
    })
    this.id = +this.routed.snapshot.params['id'];
    this.service.TaskTypeID(this.id).subscribe((res: any) => {
      this.TaskType = res;
      console.log(this.TaskType);
      this.taskTypeFrm = this.fb.group({
        Description: [this.TaskType.description, [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      }, formOptions)
    });


  }

  updateTaskT(){
    this.service.editTaskType(this.routed.snapshot.params['id'], this.taskTypeFrm.value).subscribe(
      res => {
        if (confirm('Are you sure you want to Update this Task Type?')) {
          this._snackbar.open("Success, you have Update a Task Type!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
      })
  }
  
  back()
  {
    this.route.navigateByUrl("Tasktype")
  }

  closeAlert() {
    this.alert = false;
  }

  get formdet() {
    return this.taskTypeFrm.controls;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.taskTypeFrm.controls[controlName].hasError(errorName);
  }

}

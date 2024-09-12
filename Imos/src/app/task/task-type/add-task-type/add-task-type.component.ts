import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task-type',
  templateUrl: './add-task-type.component.html',
  styleUrls: ['./add-task-type.component.css']
})
export class AddTaskTypeComponent implements OnInit {

  Description: any;
  public taskTypeFrm!: FormGroup;
  alert: boolean = false;

  constructor(private service: ServiceService, private formB: FormBuilder, private route: Router, private _snackbar: MatSnackBar,) { }

  ngOnInit(): void {
    this.taskTypeFrm = new FormGroup({
      Description: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]{1,15}"), Validators.maxLength(15)])
    })
  }

  addTasktype() {
    if (this.taskTypeFrm.valid) {
      console.log(this.taskTypeFrm.value);
      this.service.addTaskType(this.taskTypeFrm.value)
        .subscribe(res => {
          if (confirm('Are you sure you want to Add this Task Type?')) {
            this._snackbar.open("Success, you have Add a Task Type!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
          else{
            this._snackbar.open("Unsuccessful", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
        })
      }
      this.taskTypeFrm.reset();
  }

 
  back(){
    this.route.navigateByUrl("Tasktype")
  }
  
  public hasError = (controlName: string, errorName: string) => {
    return this.taskTypeFrm.controls[controlName].hasError(errorName);
  }

}

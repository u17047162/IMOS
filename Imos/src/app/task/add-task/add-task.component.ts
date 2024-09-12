import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder, Form } from '@angular/forms';
import { ServiceService, tasktype, user } from 'src/app/services/service.service';
import { FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control:FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-add-task',
  templateUrl: 
  './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {

  alert: boolean = false;
  form:FormGroup;
  matcher = new MyErrorStateMatcher();
  Tasktypes: tasktype[] = [];
  Users: user[] = [];
  public saveUsername:boolean;

  constructor(private fb: FormBuilder, private _service:ServiceService, private route: Router, private _snackbar: MatSnackBar
 ) { }

  ngOnInit(): void {
    this.buildAddForm();
  }
  private buildAddForm(){
    this.form=this.fb.group({
      
      userName: ['', [Validators.required]],
      tasktypeId: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
      qnapassed: ['', [Validators.required]],
     

    });
    this._service.getTaskType().subscribe(data =>{
      this.Tasktypes = data;
      //console.log(data);
    });

    this._service.getUser().subscribe(data =>{
      this.Users = data;
      console.log(data);
    });
  }

  AddTask() {
    if (this.form.valid) {
    var val = {tasktype: this.form.value.tasktypeId, userId: this.form.value.userName,
       startdate: this.form.value.startdate, enddate: this.form.value.enddate, qnapassed: this.form.value.qnapassed }
    this._service.addTask(val).subscribe(res => {
      if (confirm('Are you sure you want to Add this Task?')) {
        this._snackbar.open("Success, you have Add a Task!", 'OK', {
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
    });
    }

    
    }

    
  

  closeAlert() {
    this.alert = false;
  }

  public onSaveUsernameChanged(value:boolean){
    console.log(this.saveUsername = value);
}

public hasError = (controlName: string, errorName: string) => {
  return this.form.controls[controlName].hasError(errorName);
}


  Cancel(){ 
    this.route.navigateByUrl('/task')
  }
}
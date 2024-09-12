import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder, Form } from '@angular/forms';
import { ServiceService, tasktype, user } from 'src/app/services/service.service';
import { FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control:FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-update-task',
  templateUrl: 
  './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})

export class UpdateTaskComponent implements OnInit {

  alert: boolean = false;
  form:FormGroup;
  true: boolean;
  matcher = new MyErrorStateMatcher();
  Tasktypes: tasktype[] = [];
  Users: user[] = [];
  @Input() type: any;
  taskId: any;
  public saveUsername:boolean;

  constructor(private fb: FormBuilder, private _service:ServiceService, private route: Router
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
      qnapassed: ['', [Validators.required]]

    });
    this._service.getTaskType().subscribe(data =>{
      this.Tasktypes = data;
      console.log(data);
    });

    this._service.getUser().subscribe(data =>{
      this.Users = data;
      console.log(this.Users);
    });


    this.taskId = this._service.getTaskId()
    console.log(this.taskId)
    
   


    
   
  }

  UpdateTask() {

    if (confirm('Are you sure you want to update this Task?')){
    
    var id = this.taskId;
    var val = {tasktype: this.form.value.tasktypeId, userId: this.form.value.userName,
      startdate: this.form.value.startdate, enddate: this.form.value.enddate, qnapassed: this.form.value.qnapassed }
    this._service.editTask(id, val).subscribe((res: { toString: () => any; }) => { alert(res.toString()); });
    console.log();
    this.alert = true;
    }
  }

  closeAlert() {
    this.alert = false;
  }

  public onSaveUsernameChanged(value:boolean){
    console.log(this.saveUsername = value);
}


  Cancel(){ 
    this.route.navigateByUrl('/task')
  }
}
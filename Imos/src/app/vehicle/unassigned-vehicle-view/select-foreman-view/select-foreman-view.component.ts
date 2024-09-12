import { user, Users } from './../../../services/service.service';
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
  selector: 'app-select-foreman-view',
  templateUrl: './select-foreman-view.component.html',
  styleUrls: ['./select-foreman-view.component.css']
})
export class SelectForemanViewComponent implements OnInit {


oberveForeman: Observable<Users[]> = this.service.getUsers();

foremanData: Users[];

form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private MatDialog: MatDialogRef<SelectForemanViewComponent>,)

    {
      console.log(this.data.id)
    }

  ngOnInit(): void {

    this.oberveForeman.subscribe(x => {
      this.foremanData = x;
      console.log(this.foremanData)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
    }
    );

    this.form= this.formBuilder.group({
      description : ['',Validators.required],
    })
  }


  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
    this._snackBar.open(`form error! Enter all Details`, 'X', {duration: 5000});
  }


  AssignVehicle(){


    if(this.form.valid){

      const data ={
        vehicleId: this.data.id,
        userId: this.form.controls['description'].value
      }

     /* this.data.id;
      this.form.controls['name'].value;*/
      console.log(data)

      this.service.AssignVehicle(data)
      .subscribe(() => {
        this.MatDialog.close();
        this._snackBar.open('Successfully assigned vehicle to foreman', 'X',
         {duration:5000} )

      } )
    }

    else{
      this._snackBar.open('Please select Foreman', 'X',
         {duration:5000} )

    }


   }


  get StatusId(){
    return this.form.get('description')
  }

  ChangeTaskstatusID(e:any){
    this.form.patchValue({
         id: e.target.value
       })
   }



   Cancel()
   {
     this.MatDialog.close();
   }

}

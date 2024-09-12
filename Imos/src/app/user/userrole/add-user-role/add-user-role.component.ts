import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {

  alert: boolean = false;
  public userRoleFrm!: FormGroup;

  constructor( private service: ServiceService, private formB: FormBuilder, 
    private _snackbar: MatSnackBar,private router:Router) {

   }

  ngOnInit(): void {
    this.userRoleFrm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]{1,15}"), Validators.maxLength(25)]),
    });
  }

  back(){
    this.router.navigateByUrl("userrole") 
  }

  addRole() {
    if (this.userRoleFrm.valid) {
      let payload:any={};
      payload['Description'] = this.userRoleFrm.get('description')?.value;
      console.log(payload)

   this.service.addUserRole(payload).subscribe(res => {
      if (confirm('Are you sure you want to Add this User Role!')) {
        this._snackbar.open("Success, you have Added User Role Type!", 'OK', {
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

  
  public hasError = (controlName: string, errorName: string) => {
    return this.userRoleFrm.controls[controlName].hasError(errorName);
  }
}

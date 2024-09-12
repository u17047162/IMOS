import { UserRole } from './../user-role.component';
import { UserRoleService } from '../../../services/administration/user-role.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user-role',
  templateUrl: './update-user-role.component.html',
  styleUrls: ['./update-user-role.component.css']
})
export class UpdateUserRoleComponent implements OnInit {
  UserRole!:any;
  Description: any;
  public form!: FormGroup;
  hide: boolean = false;
  id!:number;
  

  constructor( private UserRoleService:UserRoleService,private fb:FormBuilder, 
    private router:Router, private route: ActivatedRoute,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};
    this.form=this.fb.group({
      Description: ['', [Validators.required]]
    },formOptions);
    this.id=+this.route.snapshot.params['id'];
    this.UserRoleService.getUserRoleById(this.id).subscribe((res:any)=>{
      this.UserRole=res;
     console.log(this.UserRole)
    this.form=this.fb.group({
      Description:[this.UserRole.Description,[Validators.required]],
    },formOptions)
    });
  }
  back(){
    this.router.navigateByUrl('userrole')

  }

  onSubmit(){
    console.log(this.form.value);
    this.UserRoleService.updateUserRole(this.route.snapshot.params['id'],this.form.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Update this UseRole Description?')) {
            this._snackBar.open("Success, you have Updated UserRole Description!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
        }
      })
    this.hide= true;
   }
   public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
}

closeAlert(){
  this.hide = false;
}

}

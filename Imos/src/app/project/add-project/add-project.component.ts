import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstructionSite, request, ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  SiteList: ConstructionSite[] = [];
  projectfrm: FormGroup;
  alert: boolean = false;
  requestList: request[] = [];

  constructor(private service: ServiceService, private fb: FormBuilder, private route: Router,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.buildAddForm();
  }
  private buildAddForm(){
    this.projectfrm=this.fb.group({
      name: ['', [Validators.required]],
      constructionsiteId: ['', [Validators.required]],
      initialrequestId: ['', [Validators.required]]
    });
    this.service.getConstructionSite().subscribe(data=>{
      this.SiteList=data;
    });
    this.service.getRequeast().subscribe(data=>{
  this.requestList=data;
  console.log(data)
});
  }
  addProject() {
    if(this.projectfrm.valid){
      console.log(this.projectfrm.value);
       this.service.addProject(this.projectfrm.value)
       .subscribe(res=>{
        if (confirm('Are you sure you want to Add this Project?')) {
          this._snackBar.open("Success, you have Add New Project!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
       
        }
        
        else{
          this._snackBar.open("Unsuccessful", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
       })
    }


  }

  closeAlert() {
    this.alert = false;
  }

  get formdet(){
    return this.projectfrm.controls;
}

  back(){
    this.route.navigateByUrl("project")
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.projectfrm.controls[controlName].hasError(errorName);
  }


}

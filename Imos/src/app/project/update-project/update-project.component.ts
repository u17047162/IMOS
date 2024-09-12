import { project, ConstructionSite } from './../../services/service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  Project!:project;
  id!: number;
  updateForm:FormGroup;
  ConstructionTypes: ConstructionSite[] = [];
//  Supplier:supplier=new supplier();

  constructor(
    private fb:FormBuilder,
    private _service:ServiceService,
    private route: ActivatedRoute,
    private router:Router,
    private http:HttpClient,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};
    this.updateForm=this.fb.group({
      Site: ['', [Validators.required]],
      Req: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      SaftyFile: ['', [Validators.required]],

    }, formOptions);

    this.id=+this.route.snapshot.params['id'];
    this._service.getProjectById(this.id).subscribe((res:any)=>{
      this.Project=res;
      console.log(this.Project);
      this.updateForm=this.fb.group({
        Site:[this.Project.constructionsite,[Validators.required]],
        Req:[this.Project.initialrequest,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        SaftyFile:[this.Project.safetyfilechecklists,[Validators.required]],
      },formOptions)
    });
    this._service.getConstructionSite().subscribe(data =>{
      this.ConstructionTypes = data;
      });
  }

  get formdet(){
    return this.updateForm.controls;
}

  onSubmit(){
    this._service.UpdateProject(this.route.snapshot.params['id'],this.updateForm.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Update this Porject?')) {
            this._snackBar.open("Success, you have Update a Porject!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
        }
      })
    }
  back(){
    this.router.navigateByUrl('project')
  }

}

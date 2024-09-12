import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { UploadsService } from 'src/app/services/uploads/uploads.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  Name: any;
  Email:any;
  ContactNumber:any;
  alert: boolean = false;
  updateForm:FormGroup;
  id!:number;
  progress: any;
  message: any = "";
  errorMessage: any = "";
  Employee!:any;


  constructor(private _service:ServiceService,private _uploadsService:UploadsService,
    private fb:FormBuilder,private http:HttpClient,private _route:Router,
    private route: ActivatedRoute,private _snackBar:MatSnackBar)
    { 
      

    }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};
    this.updateForm=this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      ContactNumber: ['', [Validators.required]],
      FilePath: ['', [Validators.required]]
    }, formOptions);

    this.id=+this.route.snapshot.params['id'];
    this._service.getEmployeeById(this.id).subscribe((res:any)=>{
      this.Employee=res;
      console.log(this.Employee);
      this.updateForm=this.fb.group({
        FilePath:[this.Employee,[Validators.required]],
        ContactNumber:[this.Employee.contactNumber,[Validators.required]],
        Name:[this.Employee.name,[Validators.required]],
        Email:[this.Employee.email,[Validators.required]],
      },formOptions)
    });
  }
  onSubmit(){
    console.log(this.updateForm.value);

    this._service.updateEmployee(this.route.snapshot.params['id'],this.updateForm.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Add this Employee ?')) {
          this._snackBar.open("Success, you have Updated Employee!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
        else {
          this._snackBar.open("Unsuccessful", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }

       console.log(this.updateForm.value);
      });

    }
    public uploadFile = (files:any) => {
      this.errorMessage = null;
      this.message = null;
      const validFileExtensions = ["application/pdf"];
      const maxUploadSize = 20000000; //20MB
  
      if (files.length === 0) {
        return;
      }
  
      let fileToUpload = <File>files[0];
      if (validFileExtensions.includes(fileToUpload.type) == false) {
        this.errorMessage = "Error: Accepted formats [.pdf]";
        return;
      }
      if (fileToUpload.size > maxUploadSize) {
        this.errorMessage = "Error: File too big.";
        return;
      }
  
      if (fileToUpload.type === validFileExtensions[0]) {
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
  
        this._uploadsService
          .uploadFile(formData)
          .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
            {
 // this.progress = Math.round(100 * event.loaded / event.total);
            }
             
            else if (event.type === HttpEventType.Response) {
              this.message = "Click submit to upload";
              let response = event.body as any;
                // filePath
                console.log(response.filePath)
                this.updateForm.controls['FilePath'].setValue(response.filePath);
              }
            });
      }
    }
    public hasError = (controlName: string, errorName: string) =>{
      return this.updateForm.controls[controlName].hasError(errorName);
  }
  Cancel(){
    this._route.navigateByUrl('employee')
  }

  closeAlert() {
    this.alert = false;
  }
  back(){
    this._route.navigateByUrl("employee")
  }

}

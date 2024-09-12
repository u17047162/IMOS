import { id } from 'date-fns/locale';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { project, safetyItem, ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-safty-checklist',
  templateUrl: './add-safty-checklist.component.html',
  styleUrls: ['./add-safty-checklist.component.css']
})
export class AddSaftyChecklistComponent implements OnInit {

  alert: boolean = false;
  public addForm!:FormGroup; 
   SafetyItems:safetyItem[]=[];
   TypeList:project[]=[];
  
  constructor(private fb: FormBuilder, private _service:ServiceService,
     private router: Router,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.buildAddForm();
  }
 
  private buildAddForm(){
    this.addForm=this.fb.group({
      safetyfileitemId: ['', [Validators.required]],  // safety Items 
      id :['', [Validators.required]] // project
    })
    this._service.getProject().subscribe(data=>{
      this.TypeList=data;
      console.log(data)
    });

    this._service.getSafetyItem().subscribe(data=>{
      this.SafetyItems=data;
      console.log(data)
    });
  }

  AddProjectChecklist(){
    if(this.addForm.valid){
      let payload:any={};
      payload['ProjectId'] = this.addForm.get('id')?.value;

      //Processes Safety Items 
      let SafetyItemsIds = this.addForm.get('safetyfileitemId')?.value as [];
      let listOfSafetyItems:any[] = [];
      SafetyItemsIds.forEach((element: any) => {
       let safetyItemObj:any = {};
       safetyItemObj['SafetyfileitemId'] = element as number;
       listOfSafetyItems.push(safetyItemObj);
      });
     
      payload['SafetyItems'] = listOfSafetyItems;
      console.log(listOfSafetyItems)
      console.log(payload)
   this._service.addProjectChecklist(payload).subscribe(res=>{
      if (confirm('Are you sure you want to Add this Safety Items To Project!')) {
        this._snackBar.open("Success, you have Add Safety Items!", 'OK', {
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
  back(){
    this.router.navigateByUrl("project")
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  }

}

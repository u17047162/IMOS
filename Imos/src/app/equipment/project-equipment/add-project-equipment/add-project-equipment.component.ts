import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { equipment, project, ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-project-equipment',
  templateUrl: './add-project-equipment.component.html',
  styleUrls: ['./add-project-equipment.component.css']
})
export class AddProjectEquipmentComponent implements OnInit {
  form:FormGroup;
  TypeList:project[]=[];
  EquipmentTypes:equipment[]=[];
  alert: boolean = false;

  constructor(private fb: FormBuilder,private _snackbar: MatSnackBar,
    private _service:ServiceService,private route: Router)
    {
      

    }

  ngOnInit(): void {
    this.buildAddForm();
  }
  private buildAddForm(){
    this.form=this.fb.group({
      equipmentId: ['', [Validators.required]],
      id: ['', [Validators.required]]
    })
    this._service.getProject().subscribe(data=>{
      this.TypeList=data;
      console.log(data)

    });

    this._service.getEquipments().subscribe(data=>{
      this.EquipmentTypes=data;
      console.log(data)
    });
  }
  AddProjectEquipments(){
    if(this.form.valid){
      let payload:any={};

      payload['ProjectId'] = this.form.get('id')?.value;

        //Process Equipments
        let employeeIds = this.form.get('name')?.value as [];
        let listOfEquipments:any[] = [];
        employeeIds.forEach((element: any) => {
         let employeeObj:any = {};
         employeeObj['Name'] = element as string;
         listOfEquipments.push(employeeObj);
        });

        payload['Equipments'] = listOfEquipments;
        console.log(payload)
      this._service.addProjectEquipment(payload)
      .subscribe(res=>{
        if (confirm('Are you sure you want to Add this Add Equipments To Selected Project Name ?')) {
          this._snackbar.open("Success, you have Added Equipments!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }

       
      })
  }
  else {
    this._snackbar.open("Unsuccessful", 'OK', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
}

back(){
  this.route.navigateByUrl("equipment")
}
closeAlert() {
  this.alert = false;
}
}

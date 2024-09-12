import { warehouse } from './../../services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  form:FormGroup;
  WarehouseTypes:warehouse[]=[];
  alert: boolean = false;


  constructor(private fb: FormBuilder,private _snackbar: MatSnackBar,
     private _service:ServiceService,private route: Router ) 
  { 

  }

  ngOnInit(): void {
    this.buildAddForm();
  }
  private buildAddForm(){
    this.form=this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    })
    this._service.getWarehouses().subscribe(data=>{
      this.WarehouseTypes=data;
      console.log(data)
    });
  }

  addEquipment(){
    if(this.form.valid){
      let payload:any={};
      payload['Name'] = this.form.get('name')?.value;
      payload['Description'] = this.form.get('description')?.value;
      payload['Quantity'] = this.form.get('quantity')?.value;

      //Process warehouses
      let warehouseIds =this.form.get('id')?.value as [];
      let listOfWarehouses:any[] = [];
      warehouseIds.forEach((element: any) => {
       let warehouseObj:any = {};
       warehouseObj['WarehouseId'] = element as number;
       listOfWarehouses.push(warehouseObj);
      });

      payload['Warehouses'] = listOfWarehouses;
      console.log(payload)
      this._service.addEquipment(payload).subscribe(res=>{
        if (confirm('Are you sure you want to Add this Equipment ?')) {
          this._snackbar.open("Success, you have Added New  Equipment!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
        else {
          this._snackbar.open("Unsuccessful", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }

        console.log(res)
      })
  }
}
closeAlert() {
  this.alert = false;
}

back(){
  this.route.navigateByUrl("equipment")
}
public hasError = (controlName: string, errorName: string) => {
  return this.form.controls[controlName].hasError(errorName);
}

}

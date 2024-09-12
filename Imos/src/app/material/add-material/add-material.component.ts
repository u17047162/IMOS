import { materialtype, warehouse } from './../../services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Supplier } from './../../supplier/supplier.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { equipment,ServiceService, supplier } from 'src/app/services/service.service';

export interface Material {
  materialId: number,
  materialtypeId: number,
  name: string,
  description: string,
  materialtype: string,
  projectmaterialrequestlists: [],
  projectmaterials: [],
  suppliermaterialorders: [],
  suppliermaterials:[],
  taskmaterials: [],
  warehousematerials: []
}

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})

export class AddMaterialComponent implements OnInit {

   materialFrm: FormGroup;
   alert: boolean = false;
   TypeList: materialtype[] = [];
   SupplierList :supplier[]=[];
   WarehouseTypes: warehouse[] = [];

  constructor(private service: ServiceService, private formB: FormBuilder, private route: Router,  private _snackbar: MatSnackBar)
   { 

   }
//this.service.getMaterialType().    subscribe(x => { this.typelist = x; console.log("typelist", this.typelist) });
  ngOnInit(): void {
    this.buildAddForm();
  }
  
  private buildAddForm(){
    this.materialFrm=this.formB.group({
      name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      materialtypeId: ['', [Validators.required]],
      warehouseId: ['', [Validators.required]],
      quantity:['',[Validators.required]],
      supplierId: ['', [Validators.required]]
    });
    this.service.getMaterialType().subscribe(data=>{
      this.TypeList=data;
      console.log(data)
     
    });
    this.service.getWarehouses().subscribe(data=>{
  this.WarehouseTypes=data;
  
});
this.service.getSupplier().subscribe(data=>{
  this.SupplierList=data;
})
}
AddMaterial() {
    if(this.materialFrm.valid){
      let payload:any = {};
      payload['Name'] = this.materialFrm.get('name')?.value;
      payload['Description'] = this.materialFrm.get('description')?.value;
      payload['Quantity'] = this.materialFrm.get('quantity')?.value;
      payload['MaterialTypeId'] = this.materialFrm.get('materialtypeId')?.value;
     
      //Process suppliers
      let supplierIds = this.materialFrm.get('supplierId')?.value as [];
      let listOfSuppliers:any[] = [];
      supplierIds.forEach((element: any) => {
       let supplierObj:any = {};
       supplierObj['SupplierId'] = element as number;
       listOfSuppliers.push(supplierObj);
      });
     
      //Process warehouses
      let warehouseIds =this.materialFrm.get('warehouseId')?.value as [];
      let listOfWarehouses:any[] = [];
      warehouseIds.forEach((element: any) => {
       let warehouseObj:any = {};
       warehouseObj['WarehouseId'] = element as number;
       listOfWarehouses.push(warehouseObj);
      });
     
      payload['Suppliers'] = listOfSuppliers;
      payload['Warehouses'] = listOfWarehouses;
          
     console.log(payload);
       this.service.addMaterial(payload)
       .subscribe(res=>{
        if (confirm('Are you sure you want to Add this Material ?')) {
          this._snackbar.open("Success, you have Added New  Material!", 'OK', {
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


       console.log(res);
       // add validation and WarehouseTypes "are you sure to add supplier notification"
       })
    }
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.materialFrm.controls[controlName].hasError(errorName);
}

  
  closeAlert() {
    this.alert = false;
  }
  
  back(){
    this.route.navigateByUrl("material")
  }
}

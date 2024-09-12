import { material, orderstatus, supplier, suppliermaterial } from './../../../services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  
  selector: 'app-add-supplier-order',
  templateUrl: './add-supplier-order.component.html',
  styleUrls: ['./add-supplier-order.component.css']
})
export class AddSupplierOrderComponent implements OnInit {

  alert:boolean=false;
  supplierList:suppliermaterial[]=[];
  form:FormGroup;
  //form1:FormGroup;
  supplierMaterialsList:material[]=[];
  id!: number;
  statusList:orderstatus[]=[];


  constructor(private _service: ServiceService, private fb: FormBuilder) { }

  closeAlert() {
    this.alert = false;
  }
 
  ngOnInit(): void {
    this.buildOrderForm();
   this.form.controls['SupplierId'].valueChanges.subscribe( val =>{
      this.getSuppierMaterial(Number(val))
    })
  }
  setCurrentId(id:number){
    this.id=id
  }
 
  private buildOrderForm(){
    this.form=this.fb.group({
      SupplierId: ['', [Validators.required]],
      quantity:['',[Validators.required]],
     // Materials: ['',[Validators.required]],
     materialId: ['', [Validators.required]],
   //  Quantity:['',[Validators.required]],
    })
  
    this._service.getMaterialBySupplierId().subscribe(data=>{
      this.supplierList=data;
      console.log(data)
    })
  }

  getSuppierMaterial(id: number) {
    this._service.getSupplierMaterial(id).subscribe(res =>{
      this.supplierMaterialsList = res;
      //console.log(res)
    })
  }

  
 /* addToOrderSupplierCart(){
    if(this.form.valid){
      let payload:any={};

      payload['Quantity'] = this.form.get('quantity')?.value;

      let materialIds=this.form.get('materialId')?.value as [];
      let listOfMaterials:any[]=[];
      materialIds.forEach((element:any)=>{
        let materialObj:any={};
        materialObj['MaterialId'] = element as number;
        listOfMaterials.push(materialObj);
      });
      
      payload['Materials'] = listOfMaterials;
   
      console.log(payload)
      this._service.addToOrderSupplierCart(payload)
      .subscribe(res=>{
      })
    }
  }*/

   addToOrderSupplierCart(materials: any){
    if(this.form.valid){
      let order:any={};
      order['Quantity'] = this.form.get('quantity')?.value;
      order['SupplierId'] = this.form.get('SupplierId')?.value;
      
      let materialIds=this.form.get('materialId')?.value as [];
      let listOfMaterials:any[]=[];
      materialIds.forEach((element: any) => {
        let materialObj:any = {};
        materialObj['MaterialId'] = element as number;
        listOfMaterials.push(materialObj);
       });

       order['Materials'] = listOfMaterials;
       console.log(order)
       this._service.addToOrderSupplierCart(order).subscribe(res =>{
         console.log(res)
       })
    }
    
  
  }

  generateSupplierOrder(){
    //email sent to supplier 

  }
  
}

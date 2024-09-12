import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equipment, ServiceService, warehouse } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {

  Equipment!:equipment;
  id!:number;
  updateForm:FormGroup;
  alert: boolean = false;
  WarehouseTypes: warehouse[] = [];

  constructor(
    private fb:FormBuilder, private _service:ServiceService,
    private route: ActivatedRoute,private router:Router,private http:HttpClient

  ) { }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};
    this.updateForm=this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      
  }, formOptions);

  this.id=+this.route.snapshot.params['id'];
  this._service.getEquipmentById(this.id).subscribe((res:any)=>{
    this.Equipment=res;
    console.log(this.Equipment);
    
    this.updateForm=this.fb.group({
      name:[this.Equipment.name,[Validators.required]],
      description:[this.Equipment.description,[Validators.required]],
      quantity:[this.Equipment.quantity,[Validators.required]],
    
    }, formOptions)
  })
  

  this._service.getWarehouses().subscribe(data=>{
    this.WarehouseTypes=data;
  })
  }
  onSubmit(){

    this._service.UpdateEquipment(this.route.snapshot.params['id'],
    this.updateForm.value).subscribe(
      res=>{
       // console.log(res + "success");
      })

  }
  closeAlert() {
    this.alert = false;
  }
  back(){

  }
}

import { deliveryNote } from './../../../services/service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { material, project, ServiceService, supplier, suppliertype } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-delivery-note',
  templateUrl: './update-delivery-note.component.html',
  styleUrls: ['./update-delivery-note.component.css']
})
export class UpdateDeliveryNoteComponent implements OnInit {

  Delivery!: deliveryNote;
  id!: number;
  updateForm:FormGroup;
  Project: project[] = [];
  Supplier: supplier[] = [];
  Material: material[] = [];
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
      projectID: ['', [Validators.required, ]],
      supplierID: ['', [Validators.required, ]],
      materialID: ['', [Validators.required, ]],
      date: ['', [Validators.required]],
      deliveryNote: ['', [Validators.required]],
    }, formOptions);

    this.id=+this.route.snapshot.params['id'];
    this._service.getSupplierById(this.id).subscribe((res:any)=>{
      this.Supplier=res;
      console.log(this.Supplier);
      this.updateForm=this.fb.group({
        projectID:[this.Delivery.ProjectID,[Validators.required]],
        supplierID:[this.Delivery.SupplierID,[Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
        materialID:[this.Delivery.MaterialID,[Validators.required,  Validators.minLength(10), Validators.maxLength(40)]],
        date:[this.Delivery.date,[Validators.required, Validators.email]],
        deliveryNote:[this.Delivery.DeliveryNote,[Validators.required, Validators.pattern("^((//+91-?)|0)?[0-9]{10}$")]],
      },formOptions)
    });
    this._service.getProject().subscribe(data => {
      this.Project = data;
    });
    this._service.getSupplier().subscribe(data => {
      this.Supplier = data;
      console.log(data)
    });
    this._service.getMaterial().subscribe(data => {
      this.Material = data;
    });
  }

  get formdet(){
    return this.updateForm.controls;
}
  
  onSubmit(){
    this._service.updateDeliveryNote(this.route.snapshot.params['id'],this.updateForm.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Update this Delivery Note?')) {
            this._snackBar.open("Success, you have Update a Delivery Note!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
        }
      })
    }
  back(){
    this.router.navigateByUrl('DeliveryNote')
  }

}

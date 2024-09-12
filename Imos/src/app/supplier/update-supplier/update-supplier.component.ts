import { Supplier } from './../supplier.component';
import { HttpClient } from '@angular/common/http';
import { supplier } from './../../services/service.service';
import { AbstractControlOptions, FormBuilder,FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { ServiceService, suppliertype } from 'src/app/services/service.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})

export class UpdateSupplierComponent implements OnInit {
 Supplier!:supplier;
  id!: number;
  updateForm:FormGroup;
  Suppliertypes: suppliertype[] = [];
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
      name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email]],
      contactnumber: ['', [Validators.required, Validators.pattern("^((//+91-?)|0)?[0-9]{10}$")]],
      suppliertypeId: ['', [Validators.required]]
    }, formOptions);

    this.id=+this.route.snapshot.params['id'];
    this._service.getSupplierById(this.id).subscribe((res:any)=>{
      this.Supplier=res;
      console.log(this.Supplier);
      this.updateForm=this.fb.group({
        suppliertypeId:[this.Supplier.suppliertype,[Validators.required]],
        name:[this.Supplier.name,[Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
        address:[this.Supplier.address,[Validators.required,  Validators.minLength(10), Validators.maxLength(40)]],
        email:[this.Supplier.email,[Validators.required, Validators.email]],
        contactnumber:[this.Supplier.contactNumber,[Validators.required, Validators.pattern("^((//+91-?)|0)?[0-9]{10}$")]],
      },formOptions)
    });
    this._service.getSupplierType().subscribe(data =>{
      this.Suppliertypes = data;
      console.log(data);
      });
  }

  get formdet(){
    return this.updateForm.controls;
}
  
  onSubmit(){
    this._service.updateSupplier(this.route.snapshot.params['id'],this.updateForm.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Update this Supplier?')) {
            this._snackBar.open("Success, you have Update a Supplier!", 'OK', {
              duration: 500,
              verticalPosition: 'bottom',
            });
        }
      })
    }
  back(){
    this.router.navigateByUrl('supplier')
  }
}


import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, Form } from '@angular/forms';
import { ServiceService, suppliertype } from 'src/app/services/service.service';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export interface Supplier {
  supplierId: number,
  suppliertypeId: number,
  name: string,
  address: string,
  email: string,
  contactnumber: number,
  suppliertype: string,
  supplierorderlines: [],
  Suppliermaterials: []
}

@Component({
  selector: 'app-add-supplier',
  templateUrl:
    './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})

export class AddSupplierComponent implements OnInit {

  form: FormGroup;
  Suppliertypes: suppliertype[] = [];

  constructor(
    private fb: FormBuilder, 
    private _service: ServiceService, private route: Router, 
    private _snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.buildAddForm();
  }

  private buildAddForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      Address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
      Email: ['', [Validators.required, Validators.email]],
      ContactNumber: ['', [Validators.required, Validators.pattern("^((//+91-?)|0)?[0-9]{10}$")]],
      suppliertypeId: ['', [Validators.required]],

    });
    this._service.getSupplierType().subscribe(data => {
      this.Suppliertypes = data;
    });
  }

  get formdet(){
      return this.form.controls;
  }

  AddSupplier() {
    if (this.form.valid) {
    console.log(this.form.value);
    this._service.addSupplier(this.form.value)
      .subscribe(res => {
        if (confirm('Are you sure you want to Add this Supplier?')) {
          this._snackbar.open("Success, you have Add a Supplier!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
      })
    }
    this.form.reset();
  }

  back() {
    this.route.navigateByUrl('supplier')
  }
}
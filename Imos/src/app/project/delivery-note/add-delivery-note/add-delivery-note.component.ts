import { ServiceService, supplier } from 'src/app/services/service.service';
import { project, material } from './../../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-delivery-note',
  templateUrl: './add-delivery-note.component.html',
  styleUrls: ['./add-delivery-note.component.css']
})
export class AddDeliveryNoteComponent implements OnInit {

  form: FormGroup;
  Project: project[] = [];
  Supplier: supplier[] = [];
  Material: material[] = [];

  constructor(
    private fb: FormBuilder, 
    private _service: ServiceService, 
    private route: Router, 
    private _snackbar: MatSnackBar,) {
  }

  ngOnInit(): void {
    this.buildAddForm();
  }

  private buildAddForm() {
    this.form = this.fb.group({
      projectID: ['', [Validators.required, ]],
      supplierID: ['', [Validators.required, ]],
      materialID: ['', [Validators.required, ]],
      date: ['', [Validators.required]],
      deliveryNote: ['', [Validators.required]],

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
      return this.form.controls;
  }

  AddDelivery() {
    if (this.form.valid) {
    console.log(this.form.value);
    this._service.addDeliveryNote(this.form.value)
      .subscribe(res => {
        if (confirm('Are you sure you want to Add this Delivery Note?')) {
          this._snackbar.open("Success, you have Add a Delivery Note!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
      })
    }
    this.form.reset();
  }

  back() {
    this.route.navigateByUrl('DeliveryNote')
  }

  onFileSelected(event: any)
  {
    console.log(event);
    
  }

}

import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

export interface Warehouse {
  warehouseId: number,
  name: string,
  location: string,
  warehouseequipments: [],
  warehousematerials: []
}
@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {
  form: FormGroup;
  alert: boolean = false;
  constructor(
    private _service: ServiceService,
    private fb: FormBuilder,
    private route: Router,
    private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildAddForm();
  }

  get formdet() {
    return this.form.controls;
  }

  private buildAddForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]]
    });
  }
  addWarehouse() {
    if (this.form.valid) {
      console.log(this.form.value);
      this._service.addWarehouse(this.form.value)
        .subscribe(res => {
          if (confirm('Are you sure you want to Add this Warehouse?')) {
            this._snackbar.open("Success, you have Add a Warehouse!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
        })
    }
    this.form.reset();
  }

  closeAlert() {
    this.alert = false;
  }
  back() {
    this.route.navigateByUrl("warehouse")
  }
}

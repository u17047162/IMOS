import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService, warehouse } from './../../services/service.service';
import { Warehouse } from './../add-warehouse/add-warehouse.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-warehouse',
  templateUrl: './update-warehouse.component.html',
  styleUrls: ['./update-warehouse.component.css']
})
export class UpdateWarehouseComponent implements OnInit {
  Warehouse!: warehouse;
  updateForm: FormGroup;
  alert: boolean = false;
  id!: number;

  constructor(private fb: FormBuilder, private _service: ServiceService,
    private route: ActivatedRoute, private router: Router, private http: HttpClient,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]]
    },
      formOptions);

    this.id = +this.route.snapshot.params['id'];
    this._service.getWarehouseById(this.id).subscribe((res: any) => {
      this.Warehouse = res;
      console.log(this.Warehouse);
      this.updateForm = this.fb.group({
        name: [this.Warehouse.name, [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
        description: [this.Warehouse.description, [Validators.required, Validators.minLength(10), Validators.maxLength(40)]]
      }, formOptions)
    });
  }

  get formdet() {
    return this.updateForm.controls;
  }

  onSubmit() {
    this._service.UpdateWarehouse(this.route.snapshot.params['id'],this.updateForm.value).subscribe(
      res=>{
        if (confirm('Are you sure you want to Update this Warehouse?')) {
            this._snackBar.open("Success, you have Update a Warehouse!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
        }
      })
  }

  back() {
    this.router.navigateByUrl('warehouse');
  }
  closeAlert() {
    this.alert = false;
  }

}

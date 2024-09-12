import { supplierType } from './../../../shared/shared.types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AbstractControlOptions, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-supplier-type',
  templateUrl: './update-supplier-type.component.html',
  styleUrls: ['./update-supplier-type.component.css']
})
export class UpdateSupplierTypeComponent implements OnInit {

  id!: number;
  Name1: any;
  public supplierTypeFrm!: FormGroup;
  alert: boolean = false;
  @Input() type: any;
  SupplierType!: supplierType


  constructor(private service: ServiceService,
    private routed: ActivatedRoute,
    private route: Router,
    private _snackbar: MatSnackBar,
    private fb: FormBuilder,
    private http: HttpClient,) { }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};

    this.supplierTypeFrm = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,15}"), Validators.maxLength(15)]],
    })
    this.id = +this.routed.snapshot.params['id'];
    this.service.SupplierTypeID(this.id).subscribe((res: any) => {
      this.SupplierType = res;
      console.log(this.SupplierType);
      this.supplierTypeFrm = this.fb.group({
        Name: [this.SupplierType.name, [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      }, formOptions)
    });
  }

  updateSupplierT() {
    this.service.editSupplierType(this.routed.snapshot.params['id'], this.supplierTypeFrm.value).subscribe(
      res => {
        if (confirm('Are you sure you want to Update this Supplier Type?')) {
          this._snackbar.open("Success, you have Update a Supplier Type!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
      })
  }

  get formdet() {
    return this.supplierTypeFrm.controls;
  }

  back() {
    this.route.navigateByUrl('suppliertype')
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.supplierTypeFrm.controls[controlName].hasError(errorName);
  }
}

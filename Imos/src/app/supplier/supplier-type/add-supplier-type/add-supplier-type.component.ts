import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-supplier-type',
  templateUrl: './add-supplier-type.component.html',
  styleUrls: ['./add-supplier-type.component.css']
})
export class AddSupplierTypeComponent implements OnInit {

  Name: any;
  public supplierTypeFrm!: FormGroup;
  alert: boolean = false;

  constructor(
    private service: ServiceService, 
    private formB:FormBuilder,
    private _snackbar: MatSnackBar,
    private route: Router) { }

  ngOnInit(): void {
    this.supplierTypeFrm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]{1,15}"), Validators.maxLength(15)]),
    })
  }

  addSupplierT() {
    if (this.supplierTypeFrm.valid) {
      console.log(this.supplierTypeFrm.value);
      this.service.addSupplierType(this.supplierTypeFrm.value)
        .subscribe(res => {
          if (confirm('Are you sure you want to Add this Supplier Type?')) {
            this._snackbar.open("Success, you have Add a Supplier Type!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
          else{
            this._snackbar.open("Unsuccessful", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          }
        })
      }
      this.supplierTypeFrm.reset();
  }

  get formdet(){
    return this.supplierTypeFrm.controls;
}

back(){
  this.route.navigateByUrl('suppliertype')
}
  public hasError = (controlName: string, errorName: string) => {
    return this.supplierTypeFrm.controls[controlName].hasError(errorName);
  }
}

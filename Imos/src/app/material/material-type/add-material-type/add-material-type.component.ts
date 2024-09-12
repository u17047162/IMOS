import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-material-type',
  templateUrl: './add-material-type.component.html',
  styleUrls: ['./add-material-type.component.css']
})
export class AddMaterialTypeComponent implements OnInit {

  Name: any;
  Description: any;
  public materialTypeFrm!: FormGroup;
  alert: boolean = false;

  constructor(private service: ServiceService, private formB: FormBuilder, private route: Router, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.materialTypeFrm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]),
      Description: new FormControl('', [Validators.required, Validators.maxLength(50)])
    })
  }

  addMaterialT() {
    if (this.materialTypeFrm.valid) {
    var val = { Name: this.Name, Description: this.Description }
    this.service.addMaterialType(val).subscribe(res=> {
      if (confirm('Are you sure you want to Add this Material Type?')) {
        this._snackbar.open("Success, you have Add a Material Type!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      }
      else{
        this._snackbar.open("Unsuccessful", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      }})

    this.Name = '';
    this.Description = '';
    console.log(val);
    
  }
}
  

  back(){
    this.route.navigateByUrl("materialtype")
  }
  
  public hasError = (controlName: string, errorName: string) => {
    return this.materialTypeFrm.controls[controlName].hasError(errorName);
  }

}


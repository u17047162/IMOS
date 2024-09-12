import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { OrdersPerSupplierReportComponent } from './orders-per-supplier-report/orders-per-supplier-report.component';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private route: Router, private _service: ServiceService,
      private _snackBar: MatSnackBar, private fb: FormBuilder, private dialog: MatDialog)
      { 

      }
      
  ngOnInit(): void {
  }
  OrdersPerSupplierReportDialog():void{
    const dialogRef=this.dialog.open(OrdersPerSupplierReportComponent,{
      width: '80%',
      height:'90%'
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    });
  }

}

import { Orderline } from './../../supplier/supplier-order/supplier-order.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServiceService, supplier } from 'src/app/services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-orders-per-supplier-report',
  templateUrl: './orders-per-supplier-report.component.html',
  styleUrls: ['./orders-per-supplier-report.component.css']
})
export class OrdersPerSupplierReportComponent implements OnInit {
  form: FormGroup;
  minDate: Date;
  maxDate: Date;

  SupplierList: supplier[] = [];
  
  displayedColumns: string[] =['date','orderNumber','supplierName']
  dataSource!: MatTableDataSource<Orderline>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private fb: FormBuilder, 
    private _service: ServiceService) { 

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 2, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.buildTableForm();
  }
  private buildTableForm(){
    this.form=this.fb.group({
      name: ['', [Validators.required]],

    });
    this._service. getSupplier().subscribe(data=>{
      this.SupplierList=data;
    })
  }

downloadPDF(){
  
}


}

import { HttpErrorResponse } from '@angular/common/http';


import 'jspdf-autotable'

import { Observable } from 'rxjs';

import { Component, OnInit, ViewChild,Inject, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewMatarialRequest,MaterialRequestStatus,ReportMaterialRequest} from 'src/app/services/service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import{material, ServiceService, UrgencyLevel,materialRequest} from 'src/app/services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//import jsPDF, * as JSPdf from 'jspdf';
import * as jsPDF from 'jspdf';
import jspdf from 'jspdf';

//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-material-request-report-view',
  templateUrl: './material-request-report-view.component.html',
  styleUrls: ['./material-request-report-view.component.css'],
  template:' {{data.id}}',
  providers: [DatePipe]
})
export class MaterialRequestReportViewComponent implements OnInit {

  info: ReportMaterialRequest[] = [];

  displayedColumns: string[] = ['clientName','urgencyLevelName', 'requestDate', 'statusName', 'materialCount'];

  dataSource!: MatTableDataSource<ReportMaterialRequest>;

  posts: ReportMaterialRequest[];

  myDate = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild('htmlData') htmlData!:ElementRef;

  constructor( @Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,) {

      this.GenerateReportByStatus();
     }



    GenerateReportByStatus(){
      this.service.getMaterialRequetsReport(this.data.id)
      .subscribe(x => {
        this.posts = x;

        this.dataSource = new MatTableDataSource(this.posts)

        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      })
    }

    applyFilter(event: Event) {
      const FilterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage()
      }
    }

    public downloadPDF(): void {
      let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jspdf('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'JPEG', 0, position, fileWidth, fileHeight);
        PDF.save('Material_Request_Report.pdf');
      });
    }

  ngOnInit(): void {
  }

}

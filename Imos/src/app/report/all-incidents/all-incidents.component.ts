import { incident, material, task } from './../../services/service.service';

import { ChartData, ChartOptions} from 'chart.js';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService,requestcount,ProjectMaterialRequest } from 'src/app/services/service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import jspdf, { jsPDF } from 'jspdf';

import { DatePipe } from '@angular/common';
//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { elementAt, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-all-incidents',
  templateUrl: './all-incidents.component.html',
  styleUrls: ['./all-incidents.component.css']
})
export class AllIncidentsComponent implements OnInit {

  Incidents:incident[] =[];

  displayedColumns: string[] = ['description','date'];

  dataSource!: MatTableDataSource<incident>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  myDate = new Date();

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar)
       {
        this.GetALLIncidents()
        }

  ngOnInit(): void {
  }

  GetALLIncidents() {
    this.service.getAllIncidentreport().subscribe(x => {
      this.Incidents =x ;
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
      PDF.save('All Incidents Report.pdf');
    });
  }


}

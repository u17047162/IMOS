import { HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewMatarialRequest,RequestNote} from 'src/app/services/service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import{material, ServiceService, UrgencyLevel,materialRequest} from 'src/app/services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-request-note',
  templateUrl: './request-note.component.html',
  styleUrls: ['./request-note.component.css']
})
export class RequestNoteComponent implements OnInit {


notedata: RequestNote[];

info: RequestNote[] = [];

displayedColumns: string[] = ['Description'];

dataSource!: MatTableDataSource<RequestNote>;

@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort

posts: RequestNote[];


  constructor( @Inject(MAT_DIALOG_DATA) public data:{id:number},
  private route: Router,
  private dialog: MatDialog,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,)
     {

      this.ViewRequestNote(this.data.id)

    }

  ngOnInit(): void {
  }

  ViewRequestNote(id:number ){

    this.service.getNoteDetails(id)
    .subscribe( x => {
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


}

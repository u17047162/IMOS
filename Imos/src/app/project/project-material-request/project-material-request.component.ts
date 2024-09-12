import { UrgencyLevel } from './../../services/service.service';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddMaterialRequestComponent} from './add-material-request/add-material-request.component';
import{UpdateMaterialRequestComponent} from './update-material-request/update-material-request.component';
import{ViewMaterialRequestDetailsComponent} from './view-material-request-details/view-material-request-details.component';
import {ServiceService, ProjectMaterialRequest} from 'src/app/services/service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UrgencyLevelComponent} from 'src/app/project/project-material-request/urgency-level/urgency-level.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateRequestStatusComponent } from './update-request-status/update-request-status.component';

@Component({
  selector: 'app-project-material-request',
  templateUrl: './project-material-request.component.html',
  styleUrls: ['./project-material-request.component.css'],
  template:' {{data.id}}',
})
export class ProjectMaterialRequestComponent implements OnInit {


  info: ProjectMaterialRequest[] =[];

  displayedColumns: string[] = ['urgencylevelName','RequestDate', 'statusName','statusUpdateDate', 'actions'];

  dataSource!: MatTableDataSource<ProjectMaterialRequest>;

  materialRequestId: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts: ProjectMaterialRequest[];


 /* calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,// initial value
    selectable: true,
    editable: true,

  };

  toggleWeekends() {
    // make a copy while overriding some values
    this.calendarOptions = {
      ...this.calendarOptions,
      weekends: !this.calendarOptions.weekends,
    }
  }*/






  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar)
        {
          this.GetMaterialRequestByProject(this.data.id);
          console.log(this.data.id);

        }

        openDialog(id:number): void {
          const dialogRef = this.dialog.open(AddMaterialRequestComponent
            , {
            width: '50%',
            height:'60%',
            data: {id}
          });


          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.GetMaterialRequestByProject(this.data.id);

          });
        }

        openUpdateDialog(id:number): void {
          const dialogRef = this.dialog.open(UpdateMaterialRequestComponent
            , {
            width: '50%',
            height:'60%',
            data: {id}
          });


          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.GetMaterialRequestByProject(this.data.id);



          });
        }

        openViewDialog(id:number): void {
          const dialogRef = this.dialog.open(ViewMaterialRequestDetailsComponent
            , {
            width: '50%',
            height:'60%',
            data: {id}
          });


          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.GetMaterialRequestByProject(this.data.id);



          });
        }

        openManageRequest(id:number): void {
          const dialogRef = this.dialog.open(UpdateRequestStatusComponent
            , {
            width: '30%',
            height:'38%',
            data: {id}
          });


          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.GetMaterialRequestByProject(this.data.id);



          });
        }




        GetMaterialRequestByProject(id: number){
          console.log(this.data.id);
          this.service.getMaterialRequestByProject(id)
          .subscribe(x=> {

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

        deleteMaterialRequest(Id: number) {
          console.log(Id);
          if (confirm('Are you sure you want to delete this Material Request?')) {
            this.service.deleteMaterialRequest(Id).subscribe(res => {
              this.GetMaterialRequestByProject(this.data.id);
              console.log(Id);
              this._snackBar.open("Success, you have deleted a material request!", 'OK', {
                duration: 3000,
                verticalPosition: 'bottom',
              });
            });
          }
        }

  ngOnInit(): void {
  }

}

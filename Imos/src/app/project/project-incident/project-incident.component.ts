
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { incident,ServiceService } from 'src/app/services/service.service';


import {AddProjectIncidentComponent} from './add-project-incident/add-project-incident.component';
import {UpdateProjectIncidentComponent} from './update-project-incident/update-project-incident.component';


@Component({
  selector: 'app-project-incident',
  templateUrl: './project-incident.component.html',
  styleUrls: ['./project-incident.component.css']
})
export class ProjectIncidentComponent implements OnInit {

  Incidents:incident[] =[];

  displayedColumns: string[] = ['description','date', 'actions'];

  dataSource!: MatTableDataSource<incident>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;



  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar)
        {
          this.GetAllIncidents();
          console.log(this.data.id)
        }

  ngOnInit(): void {
  }


GetAllIncidents() {
  this.service.getProjectIncident(this.data.id).subscribe(x => {
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



openAddDialog(id: number): void {
  const dialogRef = this.dialog.open(AddProjectIncidentComponent, {
    width: '35%',
    height:'35%',
    data:{id},
  }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.GetAllIncidents();

  });
}

openUpdateDialog(id: number): void {
  const dialogRef = this.dialog.open(UpdateProjectIncidentComponent, {
    width: '35%',
    height:'35%',
    data:{id},
  }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.GetAllIncidents();

  });
}


deleteIncident(id: number) {
  console.log(id);
  if (confirm('Are you sure you want to delete this Incident?')) {
    this.service.deleteIncident(id).subscribe(res => {
      this.GetAllIncidents();
      this._snackBar.open("Success, you have deleted a incident!", 'OK', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
    });
  }
}

}

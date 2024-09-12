import { UrgencyLevel } from './../../../services/service.service';

import { Component, OnInit, ViewChild,Inject } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service.service';

import {AddUrgencyLevelComponent} from 'src/app/project/project-material-request/urgency-level/add-urgency-level/add-urgency-level.component';
import {UpdateUrgencyLevelComponent} from 'src/app/project/project-material-request/urgency-level/update-urgency-level/update-urgency-level.component';


@Component({
  selector: 'app-urgency-level',
  templateUrl: './urgency-level.component.html',
  styleUrls: ['./urgency-level.component.css']
})
export class UrgencyLevelComponent implements OnInit {

posts:any
displayedColumns: string[] = ['level', 'description', 'actions'];

@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort


dataSource!: MatTableDataSource<UrgencyLevel>;


  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar)
       {
        this.GetUrgencyLvl();
        }

        ngOnInit(): void {

        }

GetUrgencyLvl(){
  this.service.getUrgencylvl()
  .subscribe(x => {
    console.log(x);
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


openAddDialog(): void {
  const dialogRef = this.dialog.open(AddUrgencyLevelComponent, {
    width: '25%',
    height:'35%'
  }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.GetUrgencyLvl();

  });
}

openUpdateUrgencylvlDialog(id:number): void {
  const dialogRef = this.dialog.open(UpdateUrgencyLevelComponent, {
    width: '25%',
    height:'35%',
    data: {id}
  }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.GetUrgencyLvl();

  });
}



deleteUrgencylvl(id: number){
  if (confirm('Are you sure you want to delete this Urgency level')) {
    this.service.deleteUrgencylvl(id)
    .subscribe( res => {
      this.GetUrgencyLvl();
      this._snackBar.open("Successfully deleted a Urgency level", 'OK', {
        duration: 3000,
        verticalPosition: 'bottom',
    });
  });
}
}


}



import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientRequestComponent} from 'src/app/client-request/client-request.component'
import {ServiceService,ConstructionSite} from 'src/app/services/service.service';

import {AddConstructionSiteComponent} from './add-construction-site/add-construction-site.component';
import {UpdateConstructionSiteComponent} from './update-construction-site/update-construction-site.component';

@Component({
  selector: 'app-construction-site',
  templateUrl: './construction-site.component.html',
  styleUrls: ['./construction-site.component.css'],
  template:' {{data.id}}',
})
export class ConstructionSiteComponent implements OnInit {

sites: ConstructionSite[] =[];
displayedColumns: string[] = ['Address','actions'];

dataSource!: MatTableDataSource<ConstructionSite>;

@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort


posts: any;

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) {

        this.getConstructionSites();
       }



       getConstructionSites(){
        this.service.getConstructionSite()
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
        const dialogRef = this.dialog.open(AddConstructionSiteComponent, {
          width: '25%',
          height:'35%'
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

        });
      }

      openUpdateDialog(id:number): void {
        const dialogRef = this.dialog.open(UpdateConstructionSiteComponent, {
          width: '25%',
          height:'35%',
          data:{id},
        }
        );

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

        });
      }

      deleteConstructionSite(id: number){
        if (confirm('Are you sure you want to delete this Construction Site')) {
          this.service.deleteConstructionSite(id)
          .subscribe( res => {
           // this.GetUrgencyLvl();
            this._snackBar.open("Successfully deleted a Construction Site ", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
          });
        });
      }
      }

  ngOnInit(): void {
  }

}

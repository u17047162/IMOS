import { client, ServiceService, ClientRequest } from './../services/service.service';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddRequestComponent } from './add-request/add-request.component';
import {UpdateRequestComponent} from './update-request/update-request.component';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css'],
 template:' {{data.id}}',
})
export class ClientRequestComponent implements OnInit {

  info: ClientRequest[] =[];
  id:number;


  displayedColumns: string[] = ['Description', 'actions'];
  RequestSource!: MatTableDataSource<ClientRequest>;


  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private dialog: MatDialog,
     private route: Router,
      private service: ServiceService,
      private MatDialog: MatDialogRef<ClientRequestComponent>,

     private _snackBar: MatSnackBar)


      {
          //this.GetAllRequests();
          this.GetRequestBYClient(this.data.id);
          console.log(data.id);
          this.id =data.id;
      }
      
      ngOnInit(): void {
      }

      openDialog(id:number): void {
        const dialogRef = this.dialog.open(AddRequestComponent
          , {
          width: '50%',
          height:'60%',
          data: {id}
        });


        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.GetRequestBYClient(this.data.id);



        });
      }

      openUpdateDialog(id:number): void {
        const dialogRef = this.dialog.open(UpdateRequestComponent
          , {
          width: '50%',
          height:'60%',
          data: {id}
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.GetRequestBYClient(this.data.id);
        });
      }



      GetRequestBYClient(id:number){
        this.service.getRequestByClient(id)
        .subscribe(o => {
          this.info = o;
          console.log(this.info);
          this.posts = o;

          this.RequestSource = new MatTableDataSource(this.posts)

          this.RequestSource.paginator = this.paginator;
          this.RequestSource.sort = this.sort;
        })
      }


     /* GetAllRequests() {
        this.service.getRequest().subscribe(x => {
          this.info = x;
          console.log(this.info);
          this.posts = x;

          this.RequestSource = new MatTableDataSource(this.posts)

          this.RequestSource.paginator = this.paginator;
          this.RequestSource.sort = this.sort;
        })
      }*/

      applyFilter(event: Event) {
        const FilterValue = (event.target as HTMLInputElement).value;
        this.RequestSource.filter = FilterValue.trim().toLocaleLowerCase()

        if (this.RequestSource.paginator) {
          this.RequestSource.paginator.firstPage()
        }
      }

      deleteRequest(Id: number) {
        console.log(Id);
        if (confirm('Are you sure you want to delete this Request?')) {
          this.service.deleteRequest(Id).subscribe(res => {
            this.GetRequestBYClient(this.data.id);

            this._snackBar.open("Success, you have deleted a Request!", 'OK', {
              duration: 3000,
              verticalPosition: 'bottom',
            });
          });
        }
      }




}

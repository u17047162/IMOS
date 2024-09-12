import { client, ServiceService, ClientRequest } from './../services/service.service';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientRequestComponent} from 'src/app/client-request/client-request.component'

import { AddClientComponent} from "./add-client/add-client.component";
import { UpdateClientComponent} from "./update-client/update-client.component";



/*export interface ClientRequest{
  REQUEST_ID:number,
  CLIENT_ID:number,
  DESCRIPTION : string,
  }*/

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  template:' {{data.id}}',
})
export class ClientComponent implements OnInit {



  // API Test
  Clientdata: client[] = [];

  info: ClientRequest[] =[];
  requestData:ClientRequest[] = [];
  ClientId: number;



  displayedColumns: string[] = ['Clientname','Email', 'contactnumber', 'actions'];

  dataSource!: MatTableDataSource<client>;



  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  //typelist: materialType[] = [];

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar)
   {
    this.GetAllClients();

  }
  
  ngOnInit(): void {
    //this.service.getMaterialType().subscribe(x => { this.typelist = x; console.log("typelist", this.typelist) });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ClientRequestComponent, {
      data:{id},
      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(id)

    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '66%',
      height:'70%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openUpdateDialog(id: number): void {
    const dialogRef = this.dialog.open(UpdateClientComponent, {
      width: '66%',
      height:'70%',
      data:{id},
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }




 /* GetClientsRequests(id: number){
    this.service.getRequestByClient(id).subscribe( i => {
      this.info = i;
      console.log(this.info)
    })
      }*/


  GetAllClients() {
    this.service.getClients().subscribe(x => {
      this.Clientdata = x;
      console.log(this.data);
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

  UpdateClients() {
    this.route.navigateByUrl('/updateClient')
  }

  addClients() {
    this.route.navigateByUrl('/addClient')
  }

  deleteClients(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Client?')) {
      this.service.deleteClient(id).subscribe(res => {
        this.GetAllClients();
        this._snackBar.open("Success, you have deleted a Client!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

 



}

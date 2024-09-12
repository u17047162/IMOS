import { MatSnackBar } from '@angular/material/snack-bar';
import { safetyItem, ServiceService } from './../../services/service.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { UpdateItemsComponent } from './update-items/update-items.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  template:' {{data.id}}'
})
export class ItemsComponent implements OnInit {

  info:safetyItem[]=[];
  id:number;

  displayedColumns: string[] = ['name', 'actions'];
  dataSource!: MatTableDataSource<safetyItem>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor( @Inject(MAT_DIALOG_DATA) public data:{id:number},
  private dialog: MatDialog,
   private route: Router,
    private service: ServiceService, private MatDialog:MatDialogRef<ItemsComponent>,
    private _snackbar:MatSnackBar)
     { 
      this.getItemsFromCategoryById(this.data.id)
     console.log(data.id)
      this.id=data.id;
     }

     openDialog(id:number):void{
      const dialogRef=this.dialog.open(AddItemsComponent,
        {
          width: '50%',
          height:'60%',
          data: {id}
        });
        dialogRef.afterClosed().subscribe(result=>{
          console.log('The dialog was closed');
          this.getItemsFromCategoryById(this.data.id);
        });
     }

     applyFilter(event: Event) {
      const FilterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage()
      }
    }

    openUpdateDialog(id:number):void{
      const dialogRef=this.dialog.open(UpdateItemsComponent,
        {   
          width: '50%',
          height:'60%',
          data: {id}
        });

        dialogRef.afterClosed().subscribe(result=>{
          console.log('The dialog was closed');
          this.getItemsFromCategoryById(this.data.id);
        })
    }

     getItemsFromCategoryById(id:number){
      this.service.getItemsByCategoryId(id).subscribe(o=>{
        this.info=o;
        console.log(this.info)
        this.posts=o;
        this.dataSource= new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    
     }
      /* GetAllItems() {
        this.service.getSafetyItem().subscribe(x => {
          this.info = x;
         // console.log(this.data);
          this.posts = x;
          this.dataSource = new MatTableDataSource(this.posts)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      }*/

     removeItem(id: number) {
      console.log(id);
      if (confirm('Are you sure you want to delete this Safety Item!')) {
        this.service.deleteItem(id).subscribe(res => {
          this.getItemsFromCategoryById(this.data.id);
          this._snackbar.open("Success, you have deleted Safety Item!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        })
      }
      else{
        this._snackbar.open("Unsuccessful", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      }
    }
  
  ngOnInit(): void {
  }
}

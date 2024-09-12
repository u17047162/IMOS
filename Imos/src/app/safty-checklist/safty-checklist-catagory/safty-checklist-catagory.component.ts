import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { safetyItem, safetyitemcategory, ServiceService } from 'src/app/services/service.service';
import { ItemsComponent } from '../items/items.component';
import { AddSaftyChecklistCatagoryComponent } from './add-safty-checklist-catagory/add-safty-checklist-catagory.component';
import { UpdateSaftyChecklistCatagoryComponent } from './update-safty-checklist-catagory/update-safty-checklist-catagory.component';

@Component({
  selector: 'app-safty-checklist-catagory',
  templateUrl: './safty-checklist-catagory.component.html',
  styleUrls: ['./safty-checklist-catagory.component.css'],
  template:' {{data.id}}',
})

export class SaftyChecklistCatagoryComponent implements OnInit {

  hide:any;
  type:any;
  // API Test
  APIdata: safetyitemcategory[] = [];

  info:safetyItem[]=[];

  requestData:safetyItem[]=[];
  CategoryId:number;

  displayedColumns: string[] = [ 'name', 'actions'];

  dataSource!: MatTableDataSource<safetyitemcategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private route: Router,private _service: ServiceService,
     private _snackBar: MatSnackBar) {
    this.GetAllSafetyitemcategories();
   }

   ngOnInit(): void {
    
  }
     // get all http method 
     GetAllSafetyitemcategories(){
      this._service.getSafetyCategory().subscribe(x => {
        this.APIdata = x;
        console.log(this.APIdata);
        this.posts = x;
  
        this.dataSource = new MatTableDataSource(this.posts)
  
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
     }
 
   openDialog(id:number):void{
   const dialogRef=this.dialog.open(ItemsComponent,{
    data:{id},
    width: '80%',
    height:'90%'
   });
   dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
   }

   //search 
   applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
  addCategoryTypes(){
    this.route.navigateByUrl('/addSafetyCategoryType')
  }
  updateCategoryTypes(){
    this.route.navigateByUrl('/updateSafetyCategoryType')
  }

   // update
  openUpdateDialog(id:number):void{
    const dialogRef=this.dialog.open(UpdateSaftyChecklistCatagoryComponent,{
      data:{id},
      width: '80%',
      height:'90%'
     });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  // close
  closeClick(){
    this._service.getSafetyCategory().subscribe(x => {
      this.APIdata = x;
      console.log(this.data);
      this.posts = x;

      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  })
  }

  openAddDialog():void{
    const dialogRef = this.dialog.open(AddSaftyChecklistCatagoryComponent, {
      width: '66%',
      height:'70%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });


  }

   //delete   deleteSafetyItemCategory(
   removeSafetyItemCategory(id:number){
    console.log(id);
    if (confirm('Are you sure you want to delete this Category Type?')) {
      this._service.deleteSafetyItemCategory(id).subscribe(res => {
        this.GetAllSafetyitemcategories();
        this._snackBar.open("Success, you have deleted a Category Type!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
   }
 
}

import { map } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';

import { Component, ElementRef, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import{material, ServiceService, UrgencyLevel,materialRequest} from 'src/app/services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface basket{
  name: string,
  description:string
  quantity: number;
};


@Component({
  selector: 'app-confirm-material',
  templateUrl: './confirm-material.component.html',
  styleUrls: ['./confirm-material.component.css']
})
export class ConfirmMaterialComponent implements OnInit {


  dataSource!: MatTableDataSource<basket>;

  displayedColumns: string[] = ['name','description', 'quantity', 'actions'];

  basketList: any;
  form: FormGroup;

results: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts: basket[]

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{projectMaterialId:number,taskId:number},
    private route: Router,
     private service: ServiceService,
      private _snackBar: MatSnackBar,
      private formBuilder: FormBuilder,) {

       }

  ngOnInit(): void {
    this.basketList = JSON.parse(localStorage.getItem('basket') !);

console.log(this.data.projectMaterialId,this.data.taskId)

  }


  viewbasket(){
    this.basketList = JSON.parse(localStorage.getItem('basket')!);
  }

  async requestAlert(){
    this._snackBar.open('Checkout was completed successfully', 'Ok',{
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }

  async removeAlert(){
    this._snackBar.open('The material was successfully removed from the basket', 'Ok',{
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }

  deleteItem(item: any){
    this.removeAlert();
    this.basketList.splice(this.basketList.indexOf(item),1);
   localStorage.setItem('basket',JSON.stringify(this.basketList));
  }

  getBasket(){
    this.basketList = JSON.parse(localStorage.getItem('basket')!);


    this.dataSource = new MatTableDataSource(this.basketList)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.basketList)
   }


   applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  createProjectMaterial(){
    if (this.basketList != null)
    {
      const basketMaterials = {
        projectmaterialId: this.data.projectMaterialId,
        taskId: this.data.taskId,
        basketMaterial: this.basketList
      }
      console.log(basketMaterials)


      this.service.AddMaterialTask(basketMaterials)
      .subscribe((res:any) => {

     // this.results = res.map((x: { status: any; }) =>x.status);
        this.results =res;
        /*  res((element: any) => {
            this.results = element.status;
          });*/

      console.log(this.results)

        if(this.results === 403){
          this._snackBar.open('The Task Status is either Complete or Discountinued', 'X', {duration: 5000});
        }

        else{
          this.requestAlert()
          localStorage.removeItem('basket')

        }


      }

      )

    }

    else if (this.basketList == null){
      this._snackBar.open('basket is empty', 'Ok',{
        duration: 3000,
        verticalPosition: 'bottom',
      });
    }

  }


}

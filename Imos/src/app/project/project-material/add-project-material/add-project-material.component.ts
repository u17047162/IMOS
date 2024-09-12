import { map } from 'rxjs/operators';



import { Component, ElementRef, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import{material, ServiceService} from 'src/app/services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProjectBasketComponent} from '../project-basket/project-basket.component';


@Component({
  selector: 'app-add-project-material',
  templateUrl: './add-project-material.component.html',
  styleUrls: ['./add-project-material.component.css']
})
export class AddProjectMaterialComponent implements OnInit {

  cols = 4;
gridColumns = 4;

responsive = true;


  materiallist!: material[];

  materialForm : FormGroup = this.fb.group({
    quanitity: ['',[Validators.required]],
  })


  @ViewChild('quantity', {static: true}) quantityElement: ElementRef;
  basketList:any;

  constructor(private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getMaterial()
    .subscribe((data) => {
      this.materiallist = data;
    })
  }
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(ProjectBasketComponent
      , {
      width: '50%',
      height:'60%',
      data: {id}
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


      console.log(this.data.id)

    });
  }


  async BasketAlert(){

    this._snackBar.open('materail successfully added to the basket', 'Ok',{
      duration: 3000,
      verticalPosition: 'bottom',
    });

  }


  quanitity: number


addToBasket(material: material){



  const basketMaterial = {
    ...material,
    quantity: parseInt((<HTMLInputElement>document
      .getElementById("quantity("+ material.id + ")")).value)

  };


  this.basketList = JSON.parse(localStorage.getItem('basket')!);

  if(this.basketList == null){
    this.basketList = [];
    this.basketList.push(basketMaterial);
    localStorage.setItem('basket',JSON.stringify(this.basketList));
  }
  else{
    const material = this.basketList
    .find((obj: any) => {
      return obj.id == basketMaterial.id
    } )

   //let index = this.basketList.map((i: any) => i.id ).indexOf(material.id)

   var index = 0;

      for (var i=15; i <=this.basketList.length; i++) {
         if ( this.basketList[i].id == material.id ) {
       index = i;
          break;
    }
}

    console.log(index)
    if (material == null ){
      this.basketList.push(basketMaterial);
    }




    else {
      material.quantity += basketMaterial.quantity;
      this.basketList[index] = material;
    }

    localStorage.setItem('basket',JSON.stringify(this.basketList));
  }

this.BasketAlert();

}





}

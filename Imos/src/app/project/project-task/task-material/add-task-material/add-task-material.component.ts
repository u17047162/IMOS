import { ConfirmMaterialComponent } from './../confirm-material/confirm-material.component';

import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService,Task,requestcount,ProjectMaterialRequest, materialtask, material } from 'src/app/services/service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import html2canvas from 'html2canvas';
import { elementAt, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-task-material',
  templateUrl: './add-task-material.component.html',
  styleUrls: ['./add-task-material.component.css']
})
export class AddTaskMaterialComponent implements OnInit {

  observeTasks : Observable<Task []> = this.service.getTasksByProjectfinal(this.data.id);
observeMaterialData : Observable<materialtask[]> = this.service.getMaterialbyIdFINAL(this.data.materialId);


  tasksData: Task[];
  form: FormGroup;

  materialData: materialtask[];

  materiallist!: material[];
  materialForm : FormGroup = this.fb.group({
    quanitity: ['',[Validators.required]],
  })

  @ViewChild('quantity', {static: true}) quantityElement: ElementRef;
  basketList:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{projectMaterialId:number,materialId:number, id:number},
  private route: Router,
   private service: ServiceService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.observeTasks.subscribe(x => {
      this.tasksData = x;
      console.log(this.tasksData)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
    }
    );

this.service.getMaterialbyIdFINAL(this.data.materialId)
.subscribe(( data) => {
  this.materiallist = data;
})


this.observeMaterialData.subscribe( y=> {
  this.materialData=y;
  console.log(this.materialData)
  console.log(this.data.materialId)
}, (err: HttpErrorResponse) => {
  console.log(err)
}

)


    this.form= this.fb.group({
      description : ['',Validators.required],

    })
  }
  ChangeMaterialRequestStatus(e:any){
    this.form.patchValue({
         id: e.target.value
       })
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

  taskId : number;

  openDialog(projectMaterialId:number): void {

    this.taskId = this.form.controls['description'].value;

    const dialogRef = this.dialog.open(ConfirmMaterialComponent
      , {
      width: '50%',
      height:'60%',
      data: {projectMaterialId,taskId:this.taskId }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


      console.log(this.data.id)
      console.log(projectMaterialId,this.taskId)

    });
  }



}

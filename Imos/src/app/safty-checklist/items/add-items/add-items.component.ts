import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { safetyItem, ServiceService, safetyitemcategory } from './../../../services/service.service';
import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
  template:' {{data.id}}',
})
export class AddItemsComponent implements OnInit {

  ObserveItems:Observable<safetyItem[]>=this._service.getSafetyItem();
  public addForm:FormGroup;
  requestData:safetyItem[]=[];
  APIdata:safetyitemcategory[]=[];

  posts:any;
  id:number;


  constructor( private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:{id:number},
  private MatDialog:MatDialogRef<AddItemsComponent>,private router:Router,private _service:ServiceService
  ,private snackbar:MatSnackBar)
  {
    this.id=data.id;
    console.log(this.data.id)

   }//safetyfileitemId
   getCategory(){
    this._service.getSafetyCategory().subscribe(x=>{
      this.APIdata=x;
      console.log(this.APIdata)
      this.posts=x;
    })
   }

   addItem(id:number){
    if(this.addForm.valid){
      console.log(this.addForm);
      this._service.addNewItem(this.addForm.value,id).subscribe(()=>{
        this.addForm.reset();
        this.MatDialog.close();
        this.snackbar.open('Added New Safety Item','x',
        {duration:5000})
      })
    }
   }



  ngOnInit(): void {
    this.buildAddForm();
  }

  public buildAddForm(){
    this.addForm=this.fb.group({
      name: ['',[Validators.required]]
    })
  }
  // change category method
  changeCategory(e:any){
    console.log(e.target.value)
    this.addForm.patchValue({
      CategoryId:e.target.value
    })
  }

}

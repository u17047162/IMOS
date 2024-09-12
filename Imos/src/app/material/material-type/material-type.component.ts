import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {  materialtype, ServiceService } from 'src/app/services/service.service';

export interface MaterialType {
  materialtypeId: number,
  name: string,
  description: string,
  materials: []
}

@Component({
  selector: 'app-material-type',
  templateUrl: './material-type.component.html',
  styleUrls: ['./material-type.component.css']
})
export class MaterialTypeComponent implements OnInit {

  type:any;
  hide: boolean = false;

// API Test
data: materialtype[] = [];

displayedColumns: string[] = ['name', 'description', 'actions'];

dataSource!: MatTableDataSource<MaterialType>;

@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort

posts: any;

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) { 
    this.GetAllMaterialType();
  }

  GetAllMaterialType(){
    this.service.getMaterialType().subscribe(x => {
      this.data = x;
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

  UpdateMaterialType(id: number) {
    this.route.navigateByUrl('UpdateMaterialType/' + id)
  }

   closeClick(){
    this.hide= false;
    this.service.getMaterialType().subscribe(x => {
      this.data = x;
      console.log(this.data);
      this.posts = x;

      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  })
} 
  addMaterialType() {
    this.route.navigateByUrl('/AddMaterialType')
  }

  deleteMaterialType(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Material Type?')) {
      this.service.deleteMaterialType(id).subscribe(res => {
        this.GetAllMaterialType();
        this._snackBar.open("Success, you have deleted a Material Type!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  ngOnInit(): void {
  }

}

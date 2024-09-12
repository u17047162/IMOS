import { materialtype } from './../services/service.service';
import { supplier, equipment, warehouse } from './../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { material, ServiceService } from '../services/service.service';

export interface Material {
  materialId: number,
  materialtypeId: number,
  name: string,
  description: string,
  materialtype: string,
  projectmaterialrequestlists: [],
  projectmaterials: [],
  suppliermaterialorders: [],
  suppliermaterials:[],
  taskmaterials: [],
  warehousematerials: []
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  // API Test
  data: material[] = [];

  displayedColumns: string[] = [ 'type','name', 'description','actions'];

  dataSource!: MatTableDataSource<Material>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  TypeList: materialtype[] = [];
  SupplierList:supplier[]=[];
  WarehouseTypes: warehouse[] = [];

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
    this.GetAllMaterials();
  }

  GetAllMaterials() {
    this.service.getMaterial().subscribe(x => {
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

  UpdateMaterial(id:number) {
    this.route.navigateByUrl('UpdateMaterial/' + id);
  }

  addMaterial() {
    this.route.navigateByUrl('/AddMaterial')
  }

  deleteMaterial(id:number) {
    if (confirm('Are you sure you want to delete this Material?')) {
      this.service.deleteMaterial(id).subscribe(res => {
        this.GetAllMaterials();
        this._snackBar.open("Success, you have deleted a Material!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  materialType() {
    this.route.navigateByUrl('materialtype')
  }
  ngOnInit(): void {
    this.service.getMaterialType().subscribe(x => { this.TypeList = x; console.log("typelist", this.TypeList) });
    this.service.getWarehouses().subscribe(x => { this.WarehouseTypes = x; console.log("warehouselist", this.WarehouseTypes) });

  }
}

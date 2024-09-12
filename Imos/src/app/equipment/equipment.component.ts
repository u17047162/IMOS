import { equipment, warehouse } from './../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

export interface Equipment {
  equipmentId: number,
  name: string,
  description: string,
  quantity: string,
  projectequipments: [],
  warehouseequipments: []
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  // API Test
  data: equipment[] = [];

  displayedColumns: string[] = [ 'name', 'description','actions'];

  dataSource!: MatTableDataSource<Equipment>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  
  TypeList:warehouse[]=[];
 

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
    this.GetAllEquipment();
   }

   GetAllEquipment() {
    this.service.getEquipments().subscribe(x => {
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

  UpdateEquipment(id:number) {
    this.route.navigate(['updateEquipment',id])
  }

  AddEquipment() {
    this.route.navigateByUrl('/addEquipment')
  }

  deleteEquipment(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Equipment? Related Equipments data will be permanently deleted!!!')) {
      this.service.deleteEquipment(id).subscribe(res => {
        this.GetAllEquipment();
        this._snackBar.open("Success, you have deleted an Equipment!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }
  viewDetails(){

  }
  projectEquipment(){
    this.route.navigateByUrl('projectEquipment')
  }

  ngOnInit(): void {
    //this.service.getMaterialType().subscribe(x => { this.typelist = x; console.log("typelist", this.typelist) });
  }
}

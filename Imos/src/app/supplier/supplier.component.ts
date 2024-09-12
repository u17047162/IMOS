import { vehicletype, suppliertype } from './../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService, supplier } from '../services/service.service';

export interface Supplier {
  supplierId: number,
  suppliertypeId: number,
  name: string,
  address: string,
  email: string,
  contactnumber: number,
  suppliertype: string,
  supplierorderlines: []
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  // API Test
  data: supplier[] = [];

  displayedColumns: string[] = [ 'suppliertype', 'name', 'address', 'email', 'contactNumber', 'actions'];

  dataSource!: MatTableDataSource<Supplier>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  TypeList : suppliertype[] = [];

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
    this.GetAllSuppliers();
  }

  GetAllSuppliers() {
    this.service.getSupplier().subscribe(x => {
      this.data = x;
      console.log(this.data);
      this.posts = x;

      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngOnInit(): void {
    this.service.getSupplierType().subscribe(x => { this.TypeList = x; console.log("type", this.TypeList) });
  }

  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  UpdateSupplier(id:number) {
    //console.log("Test " +id)
    this.route.navigateByUrl('/UpdateSupplier/'+id)
    
  }

  addSupplier() {
    this.route.navigateByUrl('/AddSupplier')
  }

  deleteSupplier(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Supplier?')) {
      this.service.deleteSupplier(id).subscribe(res => {
        this.GetAllSuppliers();
        this._snackBar.open("Success, you have deleted a Supplier!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  supplierType() {
    this.route.navigateByUrl('/suppliertype')
  }
  supplierOrder(){
    this.route.navigateByUrl('/supplierOrder')

  }




}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  displayedColumns: string[] = ['id', 'suppliertype', 'name', 'address' , 'email', 'contactnumber' , 'actions'];

  dataSource!: MatTableDataSource<Supplier>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private route: Router, private service: ServiceService) {
    
    this.service.getSupplier().subscribe(x => {
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

  UpdateSupplier() {
    this.route.navigateByUrl('/UpdateSupplier')
  }

  addSupplier() {
    this.route.navigateByUrl('/AddSupplier')
  }

  supplierType() {
    this.route.navigateByUrl('/suppliertype')
  }


  ngOnInit(): void {
  }

}
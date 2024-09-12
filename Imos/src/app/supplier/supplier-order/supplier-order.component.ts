import { id } from 'date-fns/locale';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { orderline, ServiceService, supplier } from 'src/app/services/service.service';

export interface Orderline {
  orderId: number,
  date:string,
  orderNumber:string,
  supplierId:number,
  supplier: string,
  supplierName?:string,
  orderStatus: string,
  description?:string,
  suppliermaterialorders:[],
  deliveries:[]
}
@Component({
  selector: 'app-supplier-order',
  templateUrl: './supplier-order.component.html',
  styleUrls: ['./supplier-order.component.css']
})
export class SupplierOrderComponent implements OnInit {

  data:orderline[]=[];

  supplierList:supplier[]=[];

  displayedColumns: string[] = ['date', 'number', 'type','status','actions'];

  dataSource!: MatTableDataSource<Orderline>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar)
 { 

  this.GetAllSupplierOrder();

 }

 ngOnInit(): void {
 

}

 GetAllSupplierOrder(){
  this.service.getSupplierOrders().subscribe(x=>{
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
addSupplierOrder(){
  this.route.navigateByUrl('/addSupplierOrder')

}

cancelOrder(id:number) {
  this.route.navigate(['CancelOrder',id])
}

recieveOrder(id:number){
  this.route.navigate(['receiveOrder',id])
}

report(){
    this.route.navigateByUrl('report')
}

}

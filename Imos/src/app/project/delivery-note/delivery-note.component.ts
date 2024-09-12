import { ServiceService, supplier } from 'src/app/services/service.service';
import { deliveryNote, project, material } from './../../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.css']
})
export class DeliveryNoteComponent implements OnInit {

  // API Test
  data: deliveryNote[] = [];

  displayedColumns: string[] = ['id', 'project', 'supplier', 'material', 'date', 'deliveryNote', 'actions'];

  dataSource!: MatTableDataSource<deliveryNote>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  ProjectList: project[] = [];
  SupplierList: supplier[] = [];
  MaterialList: material[] = [];

  constructor(private route: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
    this.GetAllDeliveryNotes();
  }

  GetAllDeliveryNotes() {
    this.service.getdeliveryNote().subscribe(x => {
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

  UpdateDeliveryNote(id: number) {
    //console.log("Test " +id)
    this.route.navigateByUrl('/DeliveryNote/' + id)

  }

  addDeliveryNote() {
    this.route.navigateByUrl('/AddDeliveryNote')
  }

  deleteDeliveryNote(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Delivery Note?')) {
      this.service.deleteDeliveryNote(id).subscribe(res => {
        this.GetAllDeliveryNotes();
        this._snackBar.open("Success, you have deleted a Delivery Note!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  ngOnInit(): void {
    this.service.getProject().subscribe(x => { this.ProjectList = x; console.log("type", this.ProjectList) });
    this.service.getSupplier().subscribe(x => { this.SupplierList = x; console.log("type", this.SupplierList) });
    this.service.getMaterial().subscribe(x => { this.MaterialList = x; console.log("type", this.MaterialList) });
  }

}



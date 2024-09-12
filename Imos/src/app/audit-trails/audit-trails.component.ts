import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { auditlog, ServiceService } from '../services/service.service';

@Component({
  selector: 'app-audit-trails',
  templateUrl: './audit-trails.component.html',
  styleUrls: ['./audit-trails.component.css']
})
export class AuditTrailsComponent implements OnInit {

  // API Test
  data: auditlog[] = [];

  displayedColumns: string[] = [ 'id','operationtype', 'tablename', 'primarykey', 'oldvalues', 'newvalues', 'datetimestap', 'affectedcolumns', 'user'];

  dataSource!: MatTableDataSource<auditlog>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts: any;

  constructor(private _service: ServiceService,) {
    this.GetAllAuditTrails();
   }

  ngOnInit(): void {
  }
  
  GetAllAuditTrails() {
    this._service.getAuditTrails().subscribe(x => {
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

}

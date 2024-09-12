import { incident, ServiceService } from './../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  type: any;
  name: any;
  description: any;
  id: any;
  hide: boolean = false;


  // API Test
  data: incident[] = [];

  displayedColumns: string[] = ['desc', 'project', 'actions'];

  dataSource!: MatTableDataSource<incident>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  //typelist: materialType[] = [];

  constructor(private route: Router,
     private service: ServiceService,
      private _snackBar: MatSnackBar) {
    this.GetAllIncidents();
  }

  GetAllIncidents() {
    this.service.getIncident().subscribe(x => {
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

  UpdateIncident(id: number) {
    this.route.navigateByUrl('updateIncident/' + id)
  }

  addIncident() {
    this.route.navigateByUrl('/addIncident')
  }

  deleteIncident(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Incident?')) {
      this.service.deleteTaskTypefinalSP(id).subscribe(res => {
        this.GetAllIncidents();
        this._snackBar.open("Success, you have deleted a Incident!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  ngOnInit(): void {
  }

}


import { employee, project, ServiceService, projectemployee } from './../../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ProjectEmployee{
  employeeId: number,
  employee: string,
  projectId: number,
  project: string,
  projectName?:string,
  name?:string,
  email?:string,
  contact?:string
  attendences:[]
}

@Component({
  selector: 'app-project-staff',
  templateUrl: './project-staff.component.html',
  styleUrls: ['./project-staff.component.css']
})
export class ProjectStaffComponent implements OnInit {

  data:projectemployee[]=[];
  displayedColumns: string[] = [ 'projectname','name', 'email', 'contact','actions'];

  dataSource!: MatTableDataSource<ProjectEmployee>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  projectList:project[]=[];
  TypeList:employee[]=[];

  constructor(private route: Router, private service: ServiceService,
     private _snackBar: MatSnackBar)
      {
        this.GetAllProjectEmployee();
       
      }
      
      ngOnInit(): void {
      }

      GetAllProjectEmployee(){
        this.service.getProjectStaff().subscribe(x=>{
          this.data=x;
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

 
  UpdateProjectStaff(id:number) {
    this.route.navigate(['updateProjectStaff',id])
  }

  addProjectStaff() {
    this.route.navigateByUrl('AddStaff')
  }

 

}

import { equipment, ServiceService } from './../../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { project, projectequipment } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ProjectEquipment{
  projectId: number,
  project: string,
  projectName?:string,
  equipmentId: number,
  equipment:string,
  name: string,
  description: string,
}
@Component({
  selector: 'app-project-equipment',
  templateUrl: './project-equipment.component.html',
  styleUrls: ['./project-equipment.component.css']
})
export class ProjectEquipmentComponent implements OnInit {

  data:projectequipment[]=[];
  displayedColumns: string[] = [ 'projectname','name', 'description', 'quantity','actions'];

  dataSource!: MatTableDataSource<ProjectEquipment>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  projectList:project[]=[];
  TypeList:equipment[]=[];

  constructor(private route: Router, private service: ServiceService,
    private _snackBar: MatSnackBar) { 
      this.GetAllProjectEquipment();
      
    }

  ngOnInit(): void {
  }

  GetAllProjectEquipment(){
    this.service.getProjectEquipment().subscribe(x=>{
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
  addProjectEquipment() {
    this.route.navigateByUrl('AddProjectEquipment')
  }
  
  UpdateProjectEquipment(id:number) {
    this.route.navigate(['updateProjectEquipment',id])
  }
  deleteprojectEquipment(id:number){
    
  }


}

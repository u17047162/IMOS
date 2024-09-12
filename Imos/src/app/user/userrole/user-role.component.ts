import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService, userrole } from '../../services/service.service';

export interface UserRole{
  id:number,
  description:string,
  users: []
}

@Component({
  selector: 'app-user-role',
  templateUrl:'./user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  
  // API Test
  data: userrole[] = [];

  displayedColumns: string[] = [ 'description', 'actions'];

  dataSource!: MatTableDataSource<UserRole>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor( private route:Router,private service:ServiceService,
    private _snackBar:MatSnackBar ) {
    this.service.getUserRole().subscribe(x => {
      this.data = x;
      console.log(this.data);
    });
   }

   ngOnInit(): void {
    this.GetAllRoles()
  }
   GetAllRoles(){
    this.service.getUserRole().subscribe(x=>{
      this.data = x;
      console.log(this.data);
      this.posts = x
      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

   }

   applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }
  UpdateUserRole(id:number){
    this.route.navigateByUrl('/EditUserRole/' +id)
  }

  addUserRole(){
    this.route.navigateByUrl('AddRole')
  }
  deleteRole(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this UserRole?')) {
      this.service.deleteUserRole(id).subscribe(res => {
        this.GetAllRoles();
        this._snackBar.open("Success, you have deleted an UserRole", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

}

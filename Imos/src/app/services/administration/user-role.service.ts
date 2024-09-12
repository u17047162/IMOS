import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  readonly Root_URL = 'https://localhost:5001/api'
  endpointBase= environment.endpointBase;
  constructor(
    private http:HttpClient,
    private _router:Router

  ) { }

  getAllUserRoles(){
    return this.http.get(this.endpointBase.concat("Roles/GetAll"));
  }

  addUserRole(payload:any) {
    return this.http.post(this.endpointBase.concat("UserRole/AddRole"),
      payload,
      { reportProgress: true, observe: 'events' });
  }

  updateUserRole(id: number,data:any) {
    return this.http.put(this.Root_URL + '/UserRole/EditUserRole/'+id,data);
  }
  
  deletetUserRole(id: number) {
    return this.http.delete(this.endpointBase.concat("UserRole/RemoveUserRole"  + "/" + id),
      { reportProgress: true, observe: 'events' });
  }
  getUserRoleById(id: number) {
    return this.http.get(this.Root_URL + '/UserRole/GetRoleById/' + id);
  }

}

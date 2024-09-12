import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {
  endpointBase = environment.endpointBase;

  constructor( private _httpClient:HttpClient,private _router:Router) { }

  uploadFile(payload:any){
    return this._httpClient.post(this.endpointBase.concat("Uploads/EmployeeDocuments/Upload"),
      payload,{ reportProgress: true, observe: 'events' });
  }
  downloadEmployeeDocument(employeeId:number){
    return this._httpClient.get(this.endpointBase.concat("Uploads/Employees/Documents/Download/" + employeeId))
  }
}

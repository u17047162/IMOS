import { id } from 'date-fns/locale';

import { FormBuilder } from '@angular/forms';

import { User } from './../user/user.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

//Employee Interface
export interface employee {
  employeeId: number,
  name: string,
  email: string,
  FileUrl: any,
  contactNumber: number,
  projectemployees: [],
  users: [],
  documents: [],
}


export interface Empdocument{
  documentId:number,
  fileUrl:any,
  employeeId: number,
  employee:string
}

//User Role Interface
export interface userrole {
  id: string,
  description: string,
  users: []
}

export interface user {
  userId: number,
  userRoleId: number,
  employeeId: number,
  username: string,
  userPassword: string,
  employee: string,
  description: string,
  equipmentchecks: [],
  stocktakes: [],
  tasks: [],
  userincidents: [],
  Vehicles: []
}

export interface Users {
  id:number,
  name: string,
  email: string
  description: string
}

//Material Interface
export interface material {
  id:number,
  materialId: number,
  materialtypeId: number,
  name: string,
  description: string,
  materialtype: string,
  projectmaterialrequestlists: [],
  projectmaterials: [],

  supplierorderlines: [],
  suppliermaterials: [],
  taskmaterials: [],
  warehouse: string
  warehouseId: number
}

export interface materialtask{
  id:number,
  materialtype: string,
  name: string,
  description: string,

}


//Material Type Interface
export interface materialtype {
  materialtypeId: number,
  name: string,
  description: string,
  materials: []
}


export interface ViewMatarialRequest{
    materialTypeName: string,
    quantity: number
    materialName: string,
    description: string
}

export interface RequestNote {
  id:number,
  description: string,
}

export interface ReportMaterialRequest{

  clientName: string,
  urgencyLevelName: string,
  statusName: string,
  materialCount: number,
  requestDate :string,
}







///Report INterface

export interface requestcount{
  clientName:string;
  count:number;
}

export interface ApprovedRequestCount{
  clientName:string;
  count:number;
}

export interface MaterialComposition{
  materialName: string;
  count:number;
  materialTotal: number;
  materialAverage: number;
}


export interface ConstructionSite{
  id:number;
  address: string;
}

















export interface ProjectMaterialRequest{
  materialRequestId: number,
  projectId: number,
  urgencyLevelName: string,
  requestDate :string,
  statusName:string,
  statusUpdateDate: string,
}

export interface ProjectMaterial{
  projectMaterialId:number,
  projectId: number,
  typeDescription:string,
  materialName: string,
  materialTypeName: string,
  quantity: number,
}
export interface TaskMaterial{
  TaskMaterialId: number;
  projectMaterialId:number,
  projectId: number,
  materialName: string,
  materialTypeName: string,
  quantity: number,
}

//Material Request Interface/incomoplete
export interface materialRequest {
  projectmaterialrequestId: number,
  projectId: number,
  urgencylevelId: number,
  fulfillmenttype: string,
  statusName:string,
  project: string,
  urgencylevel: string,

}

export interface UrgencyLevel{
  id : number,
  level: string,
  description: string
}

export interface MaterialRequestStatus{
  id : number,
  name: string,
}





//User Role Interface


//Supplier Interface
export interface supplier {
  id: number,
  suppliertypeId: number,
  name: string,
  address: string,
  email: string,
  contactNumber: number,
  suppliertype: string,
  supplierorderlines: []
}

//Supplier Type Interface
export interface suppliertype {
  id: number,
  name: string,
  suppliers: []
}

//Supplier Order
export interface  orderline {
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

export interface orderstatus{
  orderStatusId: number,
  description?:string,
  orderlines:[]
}
//suppliermaterial
export interface suppliermaterial{
  materialId: number,
  material: string,
  supplierId: number,
  supplier: string,
  supplierName?: string
}
export interface projectemployee{
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

export interface projectequipment{
  projectId: number,
  project: string,
  projectName?:string,
  equipmentId: number,
  equipment:string,
  name: string,
  description: string,
}

//Vehicle Interface
export interface vehicle {
  vehicleId: number,
  brandId: number,
  name?: string,
  vehicletypeId: number,
  description?: string,
  modelId: number,
  year?: string,
  modelName?:string,
  AssignedStatus: number,
  vehicletype: string,
  DatePurchased: string,
  status: string,
  imageUrl: string,
  vehiclemake: string,
  vehiclemodel: string,
}
// Vehicle Brand OR Make Name
export interface vehiclemake{
  id:number,
  name:string,
  vehicletypeId: number,
  vehicletype: string,
  vehiclemodels: [],
  vehicles: []
}

//Vehicle Type Interface
export interface vehicletype {
  id: number,
  description: string,
  vehiclemakes: [],
  vehicles: []
}
// Vehicle Model Interface
export interface vehiclemodel{
  id:number,
  name:string,
  year: string,
  color: string,
  brandId : number,
  vehiclemake: string,
  vehicles: []

}
// Vehicle Model Interface
export interface vehiclemodel{
  id:number,
  name:string,
  year: string,
  color: string,
  brandId : number,
  vehiclemake: string,
  vehicles: []

}



//Incident Interface
export interface incident {
  incidentId: number,
  description: string,
  date:string,
  projectId : number
}


export interface Task{
  taskId: number
  startdate: string;
  description:string;
  enddate: string;
  statusName: string;
  tasktypeDescription:string;
}

export interface TaskType{
  description: string;
  tasktypeId: number;
}

export interface TaskStatus{
  name: string;
  taskStatusId: number;
}

//Project Interface
export interface project {
  id:number,
  name:string,
  constructionsiteId: number,
  projectId:string,
  constructionsite: string,
  initialrequestId: number,
  safetyfilecreated: boolean,
  initialrequest: string,
  deliveries: [],
  invoices: [],
  projectemployees: [],
  projectequipments: [],
  projectmaterialrequests: [],
  projectmaterials: [],//
  safetyFiles: [],//
  safetyfilechecklists: []
}


export interface projectDetails{
  id: string,
  name:string,
  request: string,
  constructionsite: string,
  clientName: string,
  clientEmail: string,
  clientNo: string,
}

//Request Interface
export interface request {
  requestId: number,
  clientId: number,
  description: string,
  client: string,
  projects: []
}

//Client Interface
export interface client {
  CLIENT_ID: number,
  CONTACTNUMBER: number,
  CLIENTNAME: string,
  CLIENTEMAIL:string,

}

export interface ClientRequest{
REQUEST_ID:number,
CLIENT_ID:number,
DESCRIPTION: string,
}

//Warehouse Interface
export interface warehouse {
  id: number,
  name: string,
  description: string,
  warehouseequipments: [],
  materials: []
}

// add all ,safetychecklist,Item  category,Item
export interface safetyfilechecklist{
  projectId:number,
  safetyfileitemId:number,
  project:string,
  safetyfileitem:string,
  projectName?:string,
  name?:string
}

export interface safetyitemcategory {
  safetyfileitemId: number,
  name: string,
  safetyfileitems: [],
}



export interface safetyItem {
  safetyfileitemId:number,
  name:string,
  safetyitemcategoryId:number,
  safetyitemcategory:string,
  //CategoryName?:string,
  safetyfilechecklists:[]
}

//Equipment Interface
export interface equipment {
  equipmentId: number,
  name: string,
  description: string,
  projectequipments: [],
  warehouseequipments: [],
  quantity?:number
}

// safety checklist
export interface safetychecklist {
}

// SafetyCategory
//Supplier Type Interface Safetyitemcategory
export interface safetyitemcategory {
  id: number,
  name: string,
  Safetyfileitems: []
}
export interface safetyfileitems{}
//Safty File Interface
export interface saftyFile {
  SafetyFileID: number,
  catagory: string,
  item: string,
  project: string,
}


export interface tasktype {
  tasktype1: number,
  description: string,
  tasks: []
}

export interface task {
  taskId: number,
  tasktype: string,
  userid: string,
  startdate: any,
  enddate: any,
  description: string,
  statusName: string,
  tasktypeDescription: string,
  invoices: [],
  taskmaterials: []
}


export interface deliveryNote {
  DeliveryID: number,
  ProjectID: string,
  SupplierID: string,
  MaterialID: any,
  date: any,
  DeliveryNote: any,
}

export interface auditlog{
  auditlogId:number,
  operationtype:string,
  tablename:string,
  primarykey:string,
  oldvalues:string,
  newvalues:string,
  datetimestap:string,
  affectedcolumns:string,
  userId:number,
  user:string



}



export interface UploadFinishedEventArgs {
  filePath: '' //Comes from server
}





@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  public taskId: number;

  //URL from API
  readonly Root_URL = 'https://localhost:5001/api'

  httpOptions = {
    headers: new HttpHeaders({
      contentType: 'application/json'
    })
  };

  constructor(private http: HttpClient)
    {


  }
  // LOGIN USER
  userLogin(payload:any){
    return this.http.post(this.Root_URL + '/Account/Login', payload)
  }

 /* AddClient(addClient: client){
    return this.http.post(`${this.Root_URL}/Client/AddClient`, addClient, this.httpOptions)
  }*/

  downloadVehiclePhoto(VehicleId:any) {
    return this.http.get(
      this.Root_URL.concat("Uploads/Vehicles/Photos/Download/" + VehicleId),
      { responseType: 'blob', observe: 'response' }
    );
  }

  //Add
  uploadVehiclePhoto(obj: any): Observable<any> {
    return this.http.post(this.Root_URL + '/Uploads/Vehicles/Upload/', obj
    , {reportProgress: true, observe: 'events'});
  }

  uploadVehiclePhoto222222(VehicleId: number, imageUrl: string) {
    return this.http.put(this.Root_URL + '/Vehicle/UploadVehiclePhoto/' + VehicleId, imageUrl)
  }


  uploadVehiclePhoto1(finalform: any){
    return this.http.put(this.Root_URL + `/Vehicle/UploadVehiclePhoto/${finalform.VehicleId}/`, finalform.imageUrl);
  }

  uploadvehimg(finalform: any){
    return this.http.put(this.Root_URL + `/Vehicle/UploadVehiclePhoto/${finalform.VehicleId}/` , finalform.imageUrl);
  }



  uploadVehiclePhoto33(id:number, finalform: any){
    return this.http.put(this.Root_URL + '/Vehicle/UploadVehiclePhoto/'+ id, finalform.imageUrl);
  }

  updateVehicleImage(id:number, imageUrl:any){
    return this.http.put(this.Root_URL + '/Vehicle/UploadVehiclePhoto/' + id, imageUrl)
  }





  //User
  //Get
  getUser(): Observable<user[]> {
    return this.http.get<user[]>(this.Root_URL + '/User/GetAll/Users')
  }
  //Delete
  deleteUser(id: number) {
    return this.http.delete(this.Root_URL + '/User/DeleteUser/' + id);
  }

  //Add
  registerUser(payload: any): Observable<any> {
    return this.http.post(this.Root_URL + '/User/Register', payload);
  }

  //Update
  updateUser(payload: any, id: number) {
    return this.http.put(this.Root_URL.concat("User/" + "/" + id),
      payload,
      { reportProgress: true, observe: 'events' });
  }
  //UserRoles Htttp Requests
  //Get
  getUserRole(): Observable<userrole[]> {
    return this.http.get<userrole[]>(this.Root_URL + '/UserRole/Roles/GetAll')
  }
  //get by Id
  getUserRoleById(id: number) {
    return this.http.get(this.Root_URL + '/UserRole/GetRoleById/' + id);
  }
  //Update
  editUserRole(id:number, val: any): Observable<any> {
    const endPointUrl = this.Root_URL + '/UserRole/EditUserRole/' + id;
    return this.http.put(endPointUrl, val);
  }
  //Delete
  deleteUserRole(id: number) {
    return this.http.delete(this.Root_URL + '/UserRole/RemoveUserRole/' + id);
  }
  //Add
  addUserRole(payload: any) {
    return this.http.post(this.Root_URL + '/UserRole/AddRole', payload)
  }
  //Employee Http requests
  //get By Id
  getEmployeeById(id: number) {
    return this.http.get(this.Root_URL + '/Employee/GetEmployeeById/' + id);
  }
  //Get
  getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(this.Root_URL + '/Employee/GetAll')
  }

  // CSV
  // add employee In CSV
  addEmployeeInCSV(payload:any) {
    return this.http.post(this.Root_URL + '/Employee/AddMultiple',payload)

  }

  //upload employee In CSV
  uploadEmployeeInCSV(payload: any) {
    return this.http.post(this.Root_URL + '/Uploads/Employee/Upload',payload)
     // payload, { reportProgress: true, observe: 'events' };
  }

  //add
  addEmployee(val: any){
    return this.http.post(this.Root_URL + '/Employee/AddEmployee',val)
  }
  // update employee
  updateEmployee(id:number,data:any){
    return this.http.put(this.Root_URL + '/Employee/UpdateEmployee/'+id,data);
  }

  //Delete
  deleteEmployee(id: number) {
    return this.http.delete(this.Root_URL + '/Employee/DeleteEmployee/' + id);
  }

  //Material Http requests
  //get Material By Id
  getMaterialById(id:number){
    return this.http.get(this.Root_URL + '/Material/MaterialsById/' + id);
  }


//Get
  getSupplierMaterial(id: number): Observable<material[]> {
  return this.http.get<material[]>(this.Root_URL + '/Material/GetSupplierMaterial/'+ id)
}
  //Get
  getMaterial(): Observable<material[]> {
    return this.http.get<material[]>(this.Root_URL + '/Material/GetMaterials')
  }
  //Delete
  deleteMaterial(id: number) {
    return this.http.delete(this.Root_URL + '/Material/DeleteMaterial/' + id);
  }
  //Add
  addMaterial(val: any) {
    return this.http.post(this.Root_URL + '/Material/AddMaterial', val)
  }
  // update material
  updateMaterial(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Material/updateMaterial/' + id, data);

  }

  //Material TypeHttp requests

  //getById
  getMaterialTypeID(id: number) {
    return this.http.get(this.Root_URL + '/MaterialType/GetMaterialType/' + id);
  }
  //Get
  getMaterialType(): Observable<materialtype[]> {
    return this.http.get<materialtype[]>(this.Root_URL + '/MaterialType/GetAll')
  }
  //Add
  addMaterialType(val: any) {
    return this.http.post(this.Root_URL + '/Materialtype/AddMaterialType', val)
  }

  //Update
  editMaterialType(id: number, data: any): Observable<any> {
    return this.http.put(this.Root_URL + '/Materialtype/UpdateType/'+id,data);
  }
  //Delete
  deleteMaterialType(id: number) {
    return this.http.delete(this.Root_URL + '/MaterialType/DeleteType/' + id);
  }



  addUrgencylvl(val: any) {
    return this.http.post(this.Root_URL + '/ProjectMaterialRequest/AddUrgencyLvl', val)
  }

  deleteUrgencylvl(id: number) {
    return this.http.delete(this.Root_URL + '/ProjectMaterialRequest/DeleteUrgencylvl/' + id);
  }

  getUrgencylvl(): Observable<UrgencyLevel[]> {
    return this.http.get<[UrgencyLevel]>(this.Root_URL + '/ProjectMaterialRequest/GetAllUrgencyLvl')
  }

  updateUgencylvl(id:number,data:any){
    return this.http.put(this.Root_URL + '/ProjectMaterialRequest/UpdateUrgencyLvl/'+id,data);

  }

  addRequestStatus(val: any) {
    return this.http.post(this.Root_URL + '/ProjectMaterialRequestStatus/AddRequestStatus', val)
  }

  updateRequestStatus(id:number,data:any){
    return this.http.put(this.Root_URL + '/ProjectMaterialRequestStatus/UpdateRequestStatus/'+ id, data);

  }

  deleteRequestStatus(id: number) {
    return this.http.delete(this.Root_URL + '/ProjectMaterialRequestStatus/DeleteRequestStatus/' + id);
  }

  getMaterialRequestStatus(): Observable<MaterialRequestStatus[]> {
    return this.http.get<MaterialRequestStatus[]>(this.Root_URL + '/ProjectMaterialRequest/GetAllRequestsStatus')
  }
//task endpoints
  getTasksByProject(): Observable<Task[]> {
    return this.http.get<Task[]>(this.Root_URL + '/Task/GetAllTaskStatus')
  }


  getTaskStatus(): Observable<TaskStatus[]> {
    return this.http.get<TaskStatus[]>(this.Root_URL + '/Task/GetAllTaskStatus')
  }

  updateTaskStatus(id:number,data:any){
    return this.http.put(this.Root_URL + '/Task/UpdateTaskStatus/'+ id, data);

  }
  addTaskStatus(val: any) {
    return this.http.post(this.Root_URL + '/Task/AddTaskStatus', val)
  }

  deleteTaskStatus(id: number) {
    return this.http.delete(this.Root_URL + '/Task/DeleteTaskStatus/' + id);
  }


  getAllTaskType(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.Root_URL + '/Task/GetAllTaskTypes')
  }


  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.Root_URL + '/User/GetAll/Users')
  }

  getAllTaskselect(): Observable<TaskType[]> {
    return this.http.get<[TaskType]>(this.Root_URL + '/Task/GetAllTaskTypes')
  }

  updateTasktype(id:number,data:any){
    return this.http.put(this.Root_URL + '/Task/UpdateTaskType/'+ id, data);

  }
  addTaskTypefinal(val: any) {
    return this.http.post(this.Root_URL + '/Task/AddTaskType', val)
  }

  deleteTaskTypefinal(id: number) {
    return this.http.delete(this.Root_URL + '/Task/DeleteTaskType/' + id);
  }


  updateTasktypeSP(id:number,data:any){
    return this.http.put(this.Root_URL + '/Tasktype/UpdateTasktypes/'+ id, data);

  }
  addTaskTypeSP(val: any) {
    return this.http.post(this.Root_URL + '/Tasktype/AddTasktypes', val)
  }

  deleteTaskTypefinalSP(id: number) {
    return this.http.delete(this.Root_URL + '/Tasktype/DeleteTasktypes/' + id);
  }

  BackUpDataBaseSP() {
    return this.http.get(this.Root_URL + '/BackUpDatabase/BackUpDatabase/')
  }

  RestoreDataBaseSP(val: any) {
    return this.http.post(this.Root_URL + '/BackUpDatabase/RestoreDatabase', val)
  }
















  addConstructionSite(val: any) {
    return this.http.post(this.Root_URL + '/Constructionsite/AddConstructionsite', val)
  }


  updateConstructionSite(id:number,data:any){
    return this.http.put(this.Root_URL + '/Constructionsite/UpdateConstructionsite/'+ id, data);

  }

  deleteConstructionSite(id: number) {
    return this.http.delete(this.Root_URL + '/Constructionsite/DeleteConstructionsite/' + id);
  }

  getConstructionSite(): Observable<ConstructionSite[]> {
    return this.http.get<ConstructionSite[]>(this.Root_URL + '/Constructionsite/GetAllConstructionsites')
  }















  //Material Request
  //Get
  getMaterialRequets(): Observable<materialRequest[]> {
    return this.http.get<materialRequest[]>(this.Root_URL + '/Projectmaterialrequest/GetProjectmaterialrequests')
  }
  CalendarViewRequest(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequest/GetCalendarViewRequests')
  }


  getMaterialRequetsDetails(id: number): Observable<ViewMatarialRequest[]> {
    return this.http.get<ViewMatarialRequest[]>(this.Root_URL + '/ProjectMaterialRequest/ViewRequestDetails/' + id)
  }

  getNoteDetails(id: number): Observable<RequestNote[]> {
    return this.http.get<RequestNote[]>(this.Root_URL + '/ProjectMaterialRequest/ViewNoteDetails/' + id)
  }

  getMaterialRequetsReport(id: number): Observable<ReportMaterialRequest[]> {
    return this.http.get<ReportMaterialRequest[]>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetMaterialRequesytByStatus/' + id)
  }



  //Delete
  deleteMaterialRequest(id: number) {
    return this.http.delete(this.Root_URL + '/ProjectMaterialRequest/DeleteMaterialRequest/' + id);
  }

  AddMaterialRequest(basketMaterials: any){
    return this.http.post(this.Root_URL + `/ProjectMaterialRequest/CreateMaterialRequest/${basketMaterials.projectid}/${basketMaterials.urgencyLevelId}/` , basketMaterials.basketMaterial);
  }


  AddProjectMaterial(basketMaterials: any){
    return this.http.post(this.Root_URL + `/Projectmaterial/CreateProjectmaterial/${basketMaterials.projectId}/` , basketMaterials.basketMaterial);
  }

  AddTaskMaterial(basketMaterials: any){
    return this.http.post(this.Root_URL + `/Taskmaterial/CreatetTaskmaterial/${basketMaterials.projectmaterialId}/${basketMaterials.taskId}/` , basketMaterials.basketMaterial);
  }


  AddMaterialTask(basketMaterials: any){
    return this.http.post(this.Root_URL + `/Taskmaterial/CreateTaskmaterial/${basketMaterials.projectmaterialId }/${basketMaterials.taskId }/` , basketMaterials.basketMaterial);
  }







  createOrder(basketMaterials: any): Observable<any> {
    return this.http
      .post<any>(`${this.Root_URL}ProjectMaterialRequest/CreateMaterialRequest`, basketMaterials);
  }



  addProjMatRequest(basketMaterials: any, ) {
    return this.http.post(this.Root_URL + '/ProjectMaterialRequest/CreateMaterialRequest/', basketMaterials)
  }

  /*ManageRequestStatus(StatusDetails: any){
    return this.http.put(this.Root_URL + `/ProjectMaterialRequest/ManageMaterialRequestStatus/${StatusDetails.projectmaterialrequestId}/${StatusDetails.projectmaterialrequeststatusId}/`);
  }*/

  ManageRequestStatus( data: any) {
    return this.http.put(this.Root_URL + `/ProjectMaterialRequest/ManageMaterialRequestStatus/${data.projectmaterialrequestId}/${data.projectmaterialrequeststatusId}/`,{} );
  }


  getMaterialRequetsCount(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetProjectMaterialRequestCount')
    .pipe(map(result => result))
  }

  getApprovedRequestCount(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetApprovedRequestCount')
    .pipe(map(result => result))
  }

  getMaterialCompositonCount(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/MaterialCompositionCount')
    .pipe(map(result => result))
  }


  getProjectMaterialCount(id: number): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/Projectmaterial/GetProjectMaterial/' + id)
    .pipe(map(result => result))
  }

  getMaterialRequestControls(id: number): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/RequestMaterialControl/' + id)
    .pipe(map(result => result))
  }
  getMaterialRequestControlReport(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/AllRequestMaterialControlreport/')
    .pipe(map(result => result))
  }
  getRequestStatusCount(id: number): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequestReportsController1/GetRequestDashboard/' + id)
    .pipe(map(result => result))
  }
  



  getMaterialRequest(): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/ProjectMaterialRequest/GetAllMaterialRequests')
    .pipe(map(result => result))
  }




  CompileRequestCountDashboard(): Observable<any>{
    return this.http.get(`${this.Root_URL}/ProjectMaterialRequestReportsController1/GetProjectMaterialRequestCount`)
    .pipe(map(result => result))
  }















  //Supplier
  getSupplierById(id: number) {
    return this.http.get(this.Root_URL + '/Supplier/GetSupplierById/' + id);
  }

  //Get All
  getSupplier(): Observable<supplier[]> {
    return this.http.get<supplier[]>(this.Root_URL + '/Supplier/GetSuppliers')
  }
  // add supplier
  addSupplier(val: any) {
    return this.http.post(this.Root_URL + '/Supplier/AddSupplier', val);
  }

  //update supplier endpoint
  updateSupplier(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Supplier/updateSupplier/' + id, data);
  }

  //Delete
  deleteSupplier(id: number) {
    return this.http.delete(this.Root_URL + '/Supplier/DeleteSupplier/' + id);
  }
  //Add
  // addSupplier(val: any) {
  //   return this.http.post(this.Root_URL + '/Supplier/CreateSupplier', val)
  //   }
  //GetBy ID
  SupplierID(id: number) {
    return this.http.get(this.Root_URL + '/Supplier/GetSupplier/' + id);
  }
  //Update
  UpdateSuplier(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Supplier/UpdateSupplier/' + id, data);
  }

  //Supplier Type
  //Get
  getSupplierType(): Observable<suppliertype[]> {
    return this.http.get<suppliertype[]>(this.Root_URL + '/SupplierType/GetAll')
  }

  //By ID
  SupplierTypeID(id: number) {
    return this.http.get(this.Root_URL + '/SupplierType/' + id);
  }

  //Delete
  deleteSupplierType(id: number) {
    return this.http.delete(this.Root_URL + '/SupplierType/' + id);
  }
  //Add
  addSupplierType(val: any) {
    return this.http.post(this.Root_URL + '/Suppliertype/AddType', val)
  }

  //Update
  editSupplierType(id: number, val: any) {
    return this.http.put(this.Root_URL + '/SupplierType/' + id, val);
  }

  //Supplier Order
  //Get
   // get Material by Supplier Id
   getMaterialBySupplierId(): Observable<suppliermaterial []> {
    return this.http.get<suppliermaterial []>(this.Root_URL + '/Material/BySupplierId')
  }

  getAllStatus(): Observable<orderstatus []> {
    return this.http.get<orderstatus []>(this.Root_URL + '/OrderStatus/GetAllStatuses')
  }

  //Delete
  deleteSupplierOrder(id: number) {
    return this.http.delete(this.Root_URL + '/Supplierorderlines/DeleteSupplierorderline/' + id);
  }

  //Vehicle Working  EndPoints 
  //Get All
  getVehicle(): Observable<vehicle[]> {
    return this.http.get<vehicle[]>(this.Root_URL + '/Vehicle/GetAllVehicles')
  }
  //Add



    //Delete
    RemoveVehicleAssign(id: number) {
      return this.http.get(this.Root_URL + '/Vehicle/RemoveAssignmentVehicle/' + id);
    }

  getUnassingedVehicle(): Observable<vehicle[]> {
    return this.http.get<vehicle[]>(this.Root_URL + '/Vehicle/GetUnAssignedVehicles')
  }
  getAssingedVehicle(): Observable<vehicle[]> {
    return this.http.get<vehicle[]>(this.Root_URL + '/Vehicle/GetUserVehicles')
  }

  // add

  addVehicle(val: any) {
    return this.http.post(this.Root_URL + '/Vehicle/AddVehicle', val)
  }
  //getById
  getVehicleById(id: number) {
    return this.http.get(this.Root_URL + '/Vehicle/GetVehicleById/' + id);
  }

  //Update
  updateVehicle(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Vehicle/updateVehicle/' + id, data)
  }
  //Delete
  deleteVehicle(id: number) {
    return this.http.delete(this.Root_URL + '/Vehicle/DeleteVehicle/' + id);
  }
  // Vehicle Make Or Brands
  getAllBrands(): Observable<vehiclemake[]> {
    return this.http.get<vehiclemake[]>(this.Root_URL + '/VehicleTreeManagement/GetAll')
  }

   //Get 
   getBrandByType(id: number):  Observable<vehiclemake[]> {
    return this.http.get<vehiclemake[]>(this.Root_URL + '/VehicleTreeManagement/GetBrandByType/' + id)
  }
  
  deleteBrand(id: number) {
    return this.http.delete(this.Root_URL + '/VehicleTreeManagement/DeleteBrand/' + id);
  }
  addBrand(val: any,id:number) {
    return this.http.post(this.Root_URL + '/VehicleTreeManagement/AddBrand/'+ id, val)
  }
  updateBrand(payload: any,id: number){
    return this.http.put(this.Root_URL + '/VehicleTreeManagement/UpdateBrand/' + id,payload);
  }

  //Vehicle Type
  //By ID
  getVehicleTypeID(id: number) {
    return this.http.get(this.Root_URL + '/VehicleType/GetVehicleTypeById/' + id);
  }

  //Get Vehicle Types Working  Requests

  getTypes(): Observable<vehicletype[]> {
    return this.http.get<vehicletype[]>(this.Root_URL + '/VehicleTreeManagement/GetAllVehicleTypes')
  }

  deleteType(id: number) {
    return this.http.delete(this.Root_URL + '/VehicleTreeManagement/DeleteVehicleType/' + id);
  }

  addVehicleType(payload: any) {
    return this.http.post(this.Root_URL + '/VehicleTreeManagement/AddVehicleType', payload)
  }

  updateVehicleType(val: any,id:number){
    return this.http.put(this.Root_URL + '/VehicleTreeManagement/UpdateVehicleType/' + id, val)
  }

  getVehicleTypes(): Observable<vehicletype[]> {
    return this.http.get<vehicletype[]>(this.Root_URL + '/VehicleTreeManagement/GetAllVehicleTypes')
  }
  // Vehicle Models Working  Enpoints
 
  getByBrands(id: number):  Observable<vehiclemodel[]> {
    return this.http.get<vehiclemodel[]>(this.Root_URL + '/VehicleTreeManagement/GetModelByBrand/' + id)
  }
  getModelByBrands(id: number):  Observable<vehiclemodel[]> {
    return this.http.get<vehiclemodel[]>(this.Root_URL + '/VehicleTreeManagement/GetModelsByBrands/' + id)
  }
  
  //Update
  updateModelInBrand(val: any,id: number){
    return this.http.put(this.Root_URL + '/VehicleTreeManagement/UpdateModelsBrands/' + id, val)
  }

  deleteModel(id: number) {
    return this.http.delete(this.Root_URL + '/VehicleTreeManagement/DeleteModelsBrands/' + id);
  }

  addModel(val:any,id: number) {
    return this.http.post(this.Root_URL + '/VehicleTreeManagement/AddModelBrands/'+id,val)
  }
  getAllModelTypes(): Observable<vehiclemodel[]> {
    return this.http.get<vehiclemodel[]>(this.Root_URL + '/VehicleTreeManagement/GetAllModelTypes')
  }

  

  //Vehicle Allocations

  //Get All  Not assigned
  getAlllVehiclesNotAssigned() {
    return this.http.get<vehicle[]>(this.Root_URL + '/VehicleAllocation/GetAll/NotAssigned')
  }


  //Incident
  //Get
  getInicdent(): Observable<incident[]> {
    return this.http.get<incident[]>(this.Root_URL + '/Incident/GetIncidents')
  }
  /*Delete
  deleteIncident(id: number) {
    return this.http.delete(this.Root_URL + '/Incident/DeleteIncident/' + id);
  }*/

  //Projects
  //getID
  getProjectById(id: number) {
    return this.http.get(this.Root_URL + '/Project/GetProjects/' + id);
  }
  //Get
  getProject(): Observable<project[]> {
    return this.http.get<project[]>(this.Root_URL + '/Project/GetProjects')
  }
  //Delete
  deleteProject(id: number) {
    return this.http.get(this.Root_URL + '/Project/DeleteProject/' + id);
  }
  //add Project
  addProject(val: any) {
    return this.http.post(this.Root_URL + '/Project/AddProject', val);
  }
  //Update
  UpdateProject(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Project/UpdateProject/' + id, data);
  }


  //Clients
  //Get
  getClients(): Observable<client[]> {
    return this.http.get<client[]>(this.Root_URL + '/Client/GetAllClients')
  }

  //Add
  addclient(val: any) {
    return this.http.post(this.Root_URL + '/Client/AddClient', val)
  }
 // update client
/* updateclient(val: any) {
  return this.http.put(this.Root_URL + '/Client/UpdateClient', val)
}*/

updateclient(val: any,id: number){
  return this.http.put(this.Root_URL + '/Client/UpdateClient/' + id,val);
}

  //Delete
  deleteClient(id: number) {
    return this.http.delete(this.Root_URL + '/Client/DeleteClient/' + id);
  }

  //Clients request
  getRequest(): Observable<ClientRequest[]> {
    return this.http.get<ClientRequest[]>(this.Root_URL + '/Client/GetAllRequests')
  }
//add client's request
  addRequest(val: any, id:number) {
    return this.http.post(this.Root_URL + '/Client/AddRequest/' + id, val)
  }

  updateRequest(val: any,id: number){
    return this.http.put(this.Root_URL + '/Client/UpdateRequest/' + id, val)
  }

  deleteRequest(id: number) {
    return this.http.delete(this.Root_URL + '/Client/DeleteRequest/' + id);
  }

  getRequestByClient(id: number):  Observable<ClientRequest[]> {
    return this.http.get<ClientRequest[]>(this.Root_URL + '/Client/GetRequestBYClient/' + id)
  }

  AssignVehicle(val: any) {
    return this.http.post(this.Root_URL + '/Vehicle/AssignForemanToVehicle' ,val)
  }



//reports endpoints

getProjectTaskReport(id: number):  Observable<Task[]> {
  return this.http.get<Task[]>(this.Root_URL + '/Report/GetTasksPerProject/' + id)
}

getProjectIncidentreport(id: number):  Observable<incident[]> {
  return this.http.get<incident[]>(this.Root_URL + '/Report/GetIncidentsPerProject/' + id)
}
getAllIncidentreport():  Observable<incident[]> {
  return this.http.get<incident[]>(this.Root_URL + '/Report/GetALLIncidents')
}





  getTasksByProjectfinal(id: number):  Observable<Task[]> {
    return this.http.get<Task[]>(this.Root_URL + '/Task/GetTaskBYProject/' + id)
  }


  getMaterialbyIdFINAL(id: number):  Observable<material[]> {
    return this.http.get<material[]>(this.Root_URL + '/Material/GetBYMaterialID/' + id)
  }




  getProjectTaskCount(Id: number): Observable<any> {
    return this.http.get<any>(this.Root_URL + '/Repository/GetTaskDashboard/' + Id)
    .pipe(map(result => result))
  }

  addTaskproject(id:number, val:any) {
    return this.http.post(this.Root_URL + '/Task/AddTask/' + id, val)
  }
  updateTaskproject(id: number, val:any){
    return this.http.put(this.Root_URL + '/Task/UpdateTask/' + id, val)
  }
  deleteTaskproject(id: number) {
    return this.http.delete(this.Root_URL + '/Task/DeleteTask/' + id);
  }

  ManageTaskStatus( data: any) {
    return this.http.put(this.Root_URL + `/Task/ManageTaskstatus/${data.TaskId }/${data.TaskstatusId }/`,{} );
  }







  getMaterialRequestByProject(Id: number):  Observable<ProjectMaterialRequest[]> {
    return this.http.get<ProjectMaterialRequest[]>(this.Root_URL + '/ProjectMaterialRequest/GetRequestBYProject/' + Id)
  }

  getProjectMateiral(Id: number):  Observable<ProjectMaterial[]> {
    return this.http.get<ProjectMaterial[]>(this.Root_URL + '/Projectmaterial/GetProjectMaterial/' + Id)
  }

  getTaskMateiral(Id: number):  Observable<TaskMaterial[]> {
    return this.http.get<TaskMaterial[]>(this.Root_URL + '/Taskmaterial/GetProjectTaskMaterial/' + Id)
  }

  getProjectMateiralReport(Id: number):  Observable<ProjectMaterial[]> {
    return this.http.get<ProjectMaterial[]>(this.Root_URL + '/Report/GetProjectMaterial/' + Id)
  }

  getProjectDetailsReport(Id: number):  Observable<projectDetails[]> {
    return this.http.get<projectDetails[]>(this.Root_URL + '/Project/GetProjectsBYID/' + Id)
  }






  //Warehouse
  //getById
  getWarehouseById(id: number) {
    return this.http.get(this.Root_URL + '/Warehouse/GetWarehouseById/' + id);
  }
  //Get
  getWarehouses(): Observable<warehouse[]> {
    return this.http.get<warehouse[]>(this.Root_URL + '/Warehouse/GetAll')
  }
  /*add warehouse
  addWarehouse(val:any){
    return this.http.post(this.Root_URL + '/Warehouse/AddWarehouse',val);
  }*/
  //update warehouse
  UpdateWarehouse(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Warehouse/UpdateWarehouse/' + id, data);
  }
  //Delete
  deleteWarehouse(id: number) {
    return this.http.delete(this.Root_URL + '/Warehouse/' + id);
  }

  //Equipment EndPoints
  //Get
  getEquipments(): Observable<equipment[]> {
    return this.http.get<equipment[]>(this.Root_URL + '/Equipment/GetEquipments')
  }

  //get by Id
  getEquipmentById(id: number) {
    return this.http.get(this.Root_URL + '/Equipment/GetEquipmentById/' + id);

}
//add equipment
addEquipment(payload:any){
  return this.http.post(this.Root_URL + '/Equipment/AddEquipment',payload);
}

//Update
UpdateEquipment(id: number, data: any){
  return this.http.put(this.Root_URL + '/Equipment/UpdateEquipment/' + id, data);
}

  //Delete
  deleteEquipment(id: number) {
    return this.http.delete(this.Root_URL + '/Equipment/DeleteEquipment/' + id);
  }


 
  // SafetyCategory Enpoints 
  // get by Id
  /*getItemsFromCategoryById(id:number){
    return this.http.get<safetyitemcategory[]>(this.Root_URL + '/SafetyItemCategory/CategoryById/' + id)
  }*/
  //Get
  getSafetyCategory(): Observable<safetyitemcategory[]> {
    return this.http.get<safetyitemcategory[]>(this.Root_URL + '/SafetyItemCategory/GetAll')
  }
   //Add 
  addSafetyCategory(paload:any){
    return this.http.post(this.Root_URL + '/SafetyItemCategory/AddCategory',paload)
}
  // put 
  updateCategoryType(val: any,id: number){
    return this.http.put(this.Root_URL + '/SafetyItemCategory/UpdateCategory/' + id, val)
  }


   //Delete
   deleteSafetyItemCategory(id: number) {
    return this.http.delete(this.Root_URL + '/SafetyItemCategory/DeleteSafetyItemCategory/' + id);
  }
  // Safety Item Endpoints
  // Get Items  By Category Id

  getItemsByCategoryId(id: number):  Observable<safetyItem[]> {
    return this.http.get<safetyItem[]>(this.Root_URL + '/SafetyItem/GetItemByCategory/' + id)
  }

  // get By Id
  getItemById(id:number): Observable<safetyItem[]> {
    return this.http.get<safetyItem[]>(this.Root_URL + '/SafetyItem/GetItemById/'+id)
  }

  // Get All 
  getSafetyItem(): Observable<safetyItem[]> {
    return this.http.get<safetyItem[]>(this.Root_URL + '/SafetyItem/GetAll')
  }
  // Add Item
  addNewItem(val:any,id:number){
    return this.http.post(this.Root_URL + '/SafetyItem/AddSafetyItem/'+ id,val)
}
// Update Item
updateItem(val: any,id: number){
  return this.http.put(this.Root_URL + '/SafetyItem/UpdateItem/' + id, val)
}


  //  Delete Item
  deleteItem(id: number) {
    return this.http.delete(this.Root_URL + '/SafetyItem/RemoveItem/' + id);
  }

  //SafetyChecklist
  //Get All
  getProjectChecklist(): Observable<safetyfilechecklist[]> {
    return this.http.get<safetyfilechecklist[]>(this.Root_URL + '/SafetyChecklist/GetAll')
  }
  //getById

  //Add
  addProjectChecklist(payload:any){
    return this.http.post(this.Root_URL + '/SafetyChecklist/AddChecklist',payload);
  }

  //update

  // deleteProjectSafetyChecklist
  deleteProjectSafetyChecklist(id: number) {
    return this.http.delete(this.Root_URL + '/SafetyChecklist/' + id);
  }

  //Construction Site
  //Get


  //Update
  editConstructionSite(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + '/Constructionsite/UpdateConstructionsite/' + id;
    return this.http.put(endPointUrl, val)
  }
  //Delete

  //Requeast
  //Get
  getRequeast(): Observable<request[]> {
    return this.http.get<request[]>(this.Root_URL + '/Client/GetAllRequests')
  }
  //Add
  addRequeast(val: any) {
    return this.http.post(this.Root_URL + '/Request/CreateRequest', val)
  }

  //Update
  editRequeast(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + '/Request/UpdateRequest/' + id;
    return this.http.put(endPointUrl, val);

    return this.http.get<materialtype[]>(this.Root_URL + '/Request/GetRequests')
  }
  //Delete
  deleteRequeast(id: number) {
    return this.http.delete(this.Root_URL + '/Request/DeleteRequest/' + id);
  }

  // Project Staff EndPoints
  //Get All
  getProjectStaff(): Observable<projectemployee[]> {
    return this.http.get<projectemployee[]>(this.Root_URL + '/ProjectEmployee/GetAll')
  }
  // Add project employees
  addProjectEmployee(payload:any){
    return this.http.post(this.Root_URL + '/ProjectEmployee/Assign',payload);
  }

  // update project employees

  // Project Equipment Http requests
  // Get
    //Get All
    getProjectEquipment(): Observable<projectequipment[]> {
      return this.http.get<projectequipment[]>(this.Root_URL + '/ProjectEquipment/GetAll')
    }

    // Post
    addProjectEquipment(payload:any){
      return this.http.post(this.Root_URL + '/ProjectEquipment/Assign',payload)
    }




  //Task Type
  //Get
  getTaskType(): Observable<tasktype[]> {
    return this.http.get<tasktype[]>(this.Root_URL + "/tasktype/gettasktypes")
  }
  // remove Or delete employees

  // Supplier Order Http enpoints
// add OR Post order
  addToOrderSupplierCart(payload: any) {
    return this.http.post(this.Root_URL + '/Order/AddSupplierMaterialOrdersCart',payload);
  }
  getSupplierOrders(): Observable<orderline[]> {
    return this.http.get<orderline[]>(this.Root_URL + '/Order/GetAllSupplierOrders')
  }


  //Add
  addTaskType(val: any) {
    return this.http.post(this.Root_URL + "/tasktype/createtasktype", val)

  }

  //Update
  editTaskType(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + "/tasktype/updatetasktype/" + id;
    return this.http.put(endPointUrl, val);

  }


  //Delete




  //Task
  //Get
  getTask(): Observable<task[]> {
    return this.http.get<task[]>(this.Root_URL + "/task/gettask")
  }


  //Add
  addTask(val: any) {
    return this.http.post(this.Root_URL + "/task/createtask", val)

  }

  //Update
  editTask(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + "/task/updatetask/" + id;
    return this.http.put(endPointUrl, val);

  }

  setTaskId(Id: any) {
    this.taskId = Id;
    console.log(this.taskId);
  }

  getTaskId() {
    return this.taskId;
  }


  //Delete
  deleteTask(id: number) {
    return this.http.delete(this.Root_URL + "/task/deletetask/" + id);
  }



  //Add
  addWarehouse(val: any) {
    return this.http.post(this.Root_URL + "/Warehouse/AddWarehouse", val)

  }


  //Update
  editWarehouse(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + "/warehouse/updatewarehouse/" + id;
    return this.http.put(endPointUrl, val);

  }

  //Incident
  //getID
  getIncidentById(id: number) {
    return this.http.get(this.Root_URL + '/incident/GetIncident/' + id);
  }

  //get
  getIncident(): Observable<incident[]> {
    return this.http.get<incident[]>(this.Root_URL + "/Incident/GetAllIncidents")
  }


  getProjectIncident(id: number):  Observable<incident[]> {
    return this.http.get<incident[]>(this.Root_URL + '/Incident/GetIncidentBYProject/' + id)
  }


  //Add

  //Update

  //add client's request
  addIncident(val: any, id:number) {
    return this.http.post(this.Root_URL + '/Incident/AddIncident/' + id, val)
  }

  updateIncident(val: any,id: number){
    return this.http.put(this.Root_URL + '/Incident/UpdateIncident/' + id, val)
  }
  editIncident(id: any, val: any): Observable<any> {
    console.log(id, val)
    const endPointUrl = this.Root_URL + "/incident/updateincident/" + id;
    return this.http.put(endPointUrl, val);

  }


  //Delete
  deleteIncident(id: number) {
    return this.http.delete(this.Root_URL + '/Incident/DeleteIncident/' + id);
  }









  //Delivery note
  getDeliveryNoteID(id: number) {
    return this.http.get(this.Root_URL + '/Delivery/GetDelivery/' + id);
  }

  //Get All
  getdeliveryNote(): Observable<deliveryNote[]> {
    return this.http.get<deliveryNote[]>(this.Root_URL + '/Delivery/GetDeliverys')
  }
  // add supplier
  addDeliveryNote(val: any) {
    return this.http.post(this.Root_URL + '/Delivery/CreateDelivery', val);
  }

  //update supplier endpoint
  updateDeliveryNote(id: number, data: any) {
    return this.http.put(this.Root_URL + '/Delivery/UpdateDelivery/' + id, data);
  }

  //Delete
  deleteDeliveryNote(id: number) {
    return this.http.delete(this.Root_URL + '/Delivery/DeleteDelivery' + id);
  }
  getAuditTrails(): Observable<auditlog[]> {
    return this.http.get<auditlog[]>(this.Root_URL + '/AuditTrails/GetAll')
  }


}



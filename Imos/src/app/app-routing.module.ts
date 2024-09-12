import { AddSaftyChecklistCatagoryComponent } from './safty-checklist/safty-checklist-catagory/add-safty-checklist-catagory/add-safty-checklist-catagory.component';
import { ReceiveOrderComponent } from './supplier/supplier-order/receive-order/receive-order.component';
import { UpdateVehicleBrandComponent } from './vehicle/vehicle-brand/update-vehicle-brand/update-vehicle-brand.component';
import { AddVehicleBrandComponent } from './vehicle/vehicle-brand/add-vehicle-brand/add-vehicle-brand.component';
import { UpdateItemsComponent } from './safty-checklist/items/update-items/update-items.component';
import { AddItemsComponent } from './safty-checklist/items/add-items/add-items.component';
import { UpdateProjectEquipmentComponent } from './equipment/project-equipment/update-project-equipment/update-project-equipment.component';
import { AddProjectEquipmentComponent } from './equipment/project-equipment/add-project-equipment/add-project-equipment.component';
import { ProjectEquipmentComponent } from './equipment/project-equipment/project-equipment.component';

import { EmployeeAttendanceComponent } from './employee/employee-attendance/employee-attendance.component';
import { AddDeliveryNoteComponent } from './project/delivery-note/add-delivery-note/add-delivery-note.component';
import { UpdateDeliveryNoteComponent } from './project/delivery-note/update-delivery-note/update-delivery-note.component';
import { DeliveryNoteComponent } from './project/delivery-note/delivery-note.component';
import { IncidentReportComponent } from './reports/incident-report/incident-report.component';
import { ReportsComponent } from './reports/reports.component';
//import { SaftyChecklistItemsComponent } from './safty-checklist/safty-checklist-catagory/safty-checklist-items/safty-checklist-items.component';
//import { UpdateSaftyChecklistItemsComponent } from './safty-checklist/safty-checklist-catagory/safty-checklist-items/update-safty-checklist-items/update-safty-checklist-items.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddWarehouseComponent } from './warehouse/add-warehouse/add-warehouse.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { IncidentComponent } from './incident/incident.component';
import { SupplierOrderComponent } from './supplier/supplier-order/supplier-order.component';
import { MaterialRequestComponent } from './material/material-request/material-request.component';
//import { UserRoleComponent } from './user/user-role/user-role.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
//import { AddUserRoleComponent } from './user/user-role/add-user-role/add-user-role.component';
//import { UpdateUserRoleComponent } from './user/user-role/update-user-role/update-user-role.component';
import { MaterialComponent } from './material/material.component';
import { MaterialTypeComponent } from './material/material-type/material-type.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierTypeComponent } from './supplier/supplier-type/supplier-type.component';
import { AddMaterialComponent } from './material/add-material/add-material.component';
import { UpdateMaterialComponent } from './material/update-material/update-material.component';
import { UpdateMaterialTypeComponent } from './material/material-type/update-material-type/update-material-type.component';
import { AddMaterialTypeComponent } from './material/material-type/add-material-type/add-material-type.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { UpdateSupplierTypeComponent } from './supplier/supplier-type/update-supplier-type/update-supplier-type.component';
import { AddSupplierTypeComponent } from './supplier/supplier-type/add-supplier-type/add-supplier-type.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { AddEquipmentComponent } from './equipment/add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './equipment/update-equipment/update-equipment.component';
import { UpdateWarehouseComponent } from './warehouse/update-warehouse/update-warehouse.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { AddIncidentComponent } from './incident/add-incident/add-incident.component';
import { UpdateIncidentComponent } from './incident/update-incident/update-incident.component';
import { SaftyChecklistComponent } from './safty-checklist/safty-checklist.component';
import { SaftyChecklistCatagoryComponent } from './safty-checklist/safty-checklist-catagory/safty-checklist-catagory.component';


import { UserRoleComponent } from './user/userrole/user-role.component';
import { AddUserRoleComponent } from './user/userrole/add-user-role/add-user-role.component';
import { UpdateUserRoleComponent } from './user/userrole/update-user-role/update-user-role.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ProjectStaffComponent } from './project/project-staff/project-staff.component';
import { AddSupplierOrderComponent } from './supplier/supplier-order/add-supplier-order/add-supplier-order.component';

import { CancelOrderComponent } from './supplier/supplier-order/cancel-order/cancel-order.component';

import { AuthGuard } from './services/auth/auth.guard';
import { WarehouseEquipmentComponent } from './warehouse/warehouse-equipment/warehouse-equipment.component';
;
import { ClientRequestComponent } from './client-request/client-request.component';
import { UrgencyLevelComponent } from './project/project-material-request/urgency-level/urgency-level.component';
import { ReportComponent } from './report/report.component';
import { AddProjectStaffComponent } from './project/project-staff/add-project-staff/add-project-staff.component';
import { UpdateProjectStaffComponent } from './project/project-staff/update-project-staff/update-project-staff.component';
import { VehicleBrandComponent } from './vehicle/vehicle-brand/vehicle-brand.component';
import { VehicleTypeComponent } from './vehicle/vehicle-type/vehicle-type.component';
import { UpdateSaftyChecklistCatagoryComponent } from './safty-checklist/safty-checklist-catagory/update-safty-checklist-catagory/update-safty-checklist-catagory.component';
import { AddSaftyChecklistComponent } from './safty-checklist/add-safty-checklist/add-safty-checklist.component';
import { OtpComponent } from './login/otp/otp.component';
import { BackUpDatabaseComponent } from './back-up-database/back-up-database.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { HelpViewComponent } from './help-view/help-view.component';
const routes: Routes = [

  {path: 'reports', component: ReportComponent },


  {path: 'BackUp', component:BackUpDatabaseComponent},

  {path: 'HelpView', component:HelpViewComponent},

  {path:'Urgencylvl', component:UrgencyLevelComponent},
  //Default
  { path: '', component: LoginComponent },
  //Header
  { path: 'header', component: HeaderComponent },
  //Home
  { path: 'home', component: HomeComponent, /*canActivate:[AuthGuard]*/ },

  { path: 'login', component: LoginComponent,  },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'otp', component:OtpComponent},

  //Reporting
  { path: 'Allreports', component: ReportingComponent },

  { path: 'user', component: UserComponent,/*canActivate:[AuthGuard] */},
  { path: 'addUser', component: AddUserComponent, /*canActivate:[AuthGuard]*/ },
  { path: 'updateuser', component: UpdateUserComponent ,/*canActivate:[AuthGuard]*/ },
  //UserRole
  { path: 'userrole', component: UserRoleComponent,/*canActivate:[AuthGuard]*/ },
  { path: 'AddRole', component: AddUserRoleComponent,/*canActivate:[AuthGuard]*/ },
   { path: 'EditUserRole/:id', component: UpdateUserRoleComponent ,/*canActivate:[AuthGuard]*/},

  //Employee
  { path: 'employee', component: EmployeeComponent ,/*canActivate:[AuthGuard] */},
  { path: 'UpdateEmployee/:id', component: UpdateEmployeeComponent,/*canActivate:[AuthGuard]*/ },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  //Employee Attendance
  { path: 'Employee-Attendance', component: EmployeeAttendanceComponent },

   //Upload employee

  //Material
  { path: 'material', component: MaterialComponent,/*canActivate:[AuthGuard]*/ },
  { path: 'UpdateMaterial/:id', component: UpdateMaterialComponent,/*canActivate:[AuthGuard]*/ },
  { path: 'AddMaterial', component: AddMaterialComponent,/*canActivate:[AuthGuard]*/ },
  //Material Type
  { path: 'materialtype', component: MaterialTypeComponent,/*canActivate:[AuthGuard]*/ },
  { path: 'UpdateMaterialType/:id', component: UpdateMaterialTypeComponent,/*canActivate:[AuthGuard]*/ },
  { path: 'AddMaterialType', component: AddMaterialTypeComponent,/*canActivate:[AuthGuard]*/},
  //Material Requst
  { path: 'materialRequest', component: MaterialRequestComponent },
  //Supplier
  { path: 'supplier', component: SupplierComponent },
  { path: 'UpdateSupplier/:id', component: UpdateSupplierComponent },
  { path: 'AddSupplier', component: AddSupplierComponent },

  //Supplier Type
  { path: 'suppliertype', component: SupplierTypeComponent,/*canActivate:[AuthGuard]*/},
  { path: 'UpdateSupplierType/:id', component: UpdateSupplierTypeComponent,/*canActivate:[AuthGuard]*/},
  { path: 'AddSupplierType', component: AddSupplierTypeComponent,/*canActivate:[AuthGuard]*/ },

  //Supplier Order
  { path: 'supplierOrder', component: SupplierOrderComponent },
  { path: 'addSupplierOrder', component: AddSupplierOrderComponent },
  { path: 'receiveOrder/:id', component: ReceiveOrderComponent },
  { path: 'CancelOrder/:id', component: CancelOrderComponent },


  //Vehicle
  { path: 'vehicle', component: VehicleComponent,/*canActivate:[AuthGuard]*/},
  { path: 'addVehicle', component: AddVehicleComponent,/*canActivate:[AuthGuard]*/},
  { path: 'updateVehicle/:id', component: UpdateVehicleComponent,/*canActivate:[AuthGuard]*/ },

  // Vehicle Tree Routes
    //Brands
    { path: 'brands', component: VehicleBrandComponent,/*canActivate:[AuthGuard]*/ },
    { path: 'addBrand', component: AddVehicleBrandComponent ,/*canActivate:[AuthGuard]*/},
    { path: 'updateBrand', component: UpdateVehicleBrandComponent,/*canActivate:[AuthGuard]*/ },

    {path: 'vehicleType', component:VehicleTypeComponent,/*canActivate:[AuthGuard]*/},


  //Vehicle Type

  { path: 'VehicleTreeManagement', component: VehicleTypeComponent },
  /*{ path: 'addVehicleType', component: AddVehicleTypeComponent },
  { path: 'updateVehicleType/:id', component: UpdateVehicleTypeComponent },*/

  //Incident
  { path: 'incident', component: IncidentComponent },
  { path: 'addIncident', component: AddIncidentComponent },
  { path: 'updateIncident/:id', component: UpdateIncidentComponent },
  //Projects
  { path: 'project', component: ProjectComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'updateProject/:id', component: UpdateProjectComponent },

   // Project staff
   { path: 'projectstaff', component: ProjectStaffComponent },
   { path: 'AddStaff', component: AddProjectStaffComponent },
   { path: 'updateProjectStaff/:id', component: UpdateProjectStaffComponent },

// Project Equipment
{ path: 'projectEquipment', component: ProjectEquipmentComponent },
{ path: 'AddProjectEquipment', component: AddProjectEquipmentComponent },
{ path: 'updateProjectEquipment/:id', component: UpdateProjectEquipmentComponent },

// Project

  //Clients
  { path: 'client', component: ClientComponent },
  { path: 'addClient', component: AddClientComponent },
  { path: 'updateClient', component: UpdateClientComponent },
  {path: 'clientrequest', component:ClientRequestComponent},

  //Warehouses
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'addWarehouse', component: AddWarehouseComponent },
  { path: 'updateWarehouse/:id', component: UpdateWarehouseComponent },
  //Equipment
  { path: 'equipment', component: EquipmentComponent },
  { path: 'addEquipment', component: AddEquipmentComponent },
  { path: 'updateEquipment/:id', component: UpdateEquipmentComponent },

  //Safty Checklist
  { path: 'saftyChecklist', component: SaftyChecklistComponent },
  { path: 'addProjectChecklist', component: AddSaftyChecklistComponent },


  //Safty Checklist Category
  { path: 'saftyChecklistCatagory', component: SaftyChecklistCatagoryComponent },
  { path: 'addSafetyCategoryType', component: AddSaftyChecklistCatagoryComponent },
  { path: 'updateSafetyCategoryType', component: UpdateSaftyChecklistCatagoryComponent },

  //Safty Checklist Items openAddDialog
   { path: 'saftyChecklistItems', component: SaftyChecklistComponent },
   { path: 'addsaftyChecklistItems', component: AddItemsComponent },
   { path: 'updatesaftyChecklistItems/:id', component:  UpdateItemsComponent},

// reporting

  //Reports
  { path: 'reports', component: ReportsComponent },
  { path: 'incidentReport', component: IncidentReportComponent },

  //Delivery Note
  { path: 'DeliveryNote', component: DeliveryNoteComponent },
  { path: 'UpdateDeliveryNote/:id', component: UpdateDeliveryNoteComponent },
  { path: 'AddDeliveryNote', component: AddDeliveryNoteComponent },

  {path: 'auditTrail', component:AuditTrailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

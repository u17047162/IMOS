
import { AddMaterialRequestComponent } from './project/project-material-request/add-material-request/add-material-request.component';
import { ServiceService } from './services/service.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {getMatInputUnsupportedTypeError, MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UserComponent } from './user/user.component';
// import { AddUserRoleComponent } from './user/user-role/add-user-role/add-user-role.component';
// import { UpdateUserRoleComponent } from './user/user-role/update-user-role/update-user-role.component';
// import { UserRoleComponent } from './user/user-role/user-role.component';
import { MaterialComponent } from './material/material.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MaterialTypeComponent } from './material/material-type/material-type.component';
import { SupplierTypeComponent } from './supplier/supplier-type/supplier-type.component';
import { AddMaterialComponent } from './material/add-material/add-material.component';
import { UpdateMaterialComponent } from './material/update-material/update-material.component';
import { UpdateMaterialTypeComponent } from './material/material-type/update-material-type/update-material-type.component';
import { AddMaterialTypeComponent } from './material/material-type/add-material-type/add-material-type.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { UpdateSupplierTypeComponent } from './supplier/supplier-type/update-supplier-type/update-supplier-type.component';
import { AddSupplierTypeComponent } from './supplier/supplier-type/add-supplier-type/add-supplier-type.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import {AddUserComponent} from 'src/app/user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';

import { IncidentComponent } from './incident/incident.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

import { FilterPipeModule } from 'ngx-filter-pipe';

import { SupplierOrderComponent } from './supplier/supplier-order/supplier-order.component';
import { AddEquipmentComponent } from './equipment/add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './equipment/update-equipment/update-equipment.component';
import { UpdateWarehouseComponent } from './warehouse/update-warehouse/update-warehouse.component';
import { AddWarehouseComponent } from './warehouse/add-warehouse/add-warehouse.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddIncidentComponent } from './incident/add-incident/add-incident.component';
import { UpdateIncidentComponent } from './incident/update-incident/update-incident.component';
import { TaskComponent } from './task/task.component';
//import { AddTaskComponent } from './task/add-task/add-task.component';
//import { UpdateTaskComponent } from './task/update-task/update-task.component';
//import { TaskTypeComponent } from './task/task-type/task-type.component';
//import { AddTaskTypeComponent } from './task/task-type/add-task-type/add-task-type.component';
//import { UpdateTaskTypeComponent } from './task/task-type/update-task-type/update-task-type.component';
import { ProjectStaffComponent } from './project/project-staff/project-staff.component';
import { AddProjectStaffComponent } from './project/project-staff/add-project-staff/add-project-staff.component';
import { UpdateProjectStaffComponent } from './project/project-staff/update-project-staff/update-project-staff.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SaftyChecklistComponent } from './safty-checklist/safty-checklist.component';
import { SaftyChecklistCatagoryComponent } from './safty-checklist/safty-checklist-catagory/safty-checklist-catagory.component';

import { ClientRequestComponent } from './client-request/client-request.component';
import { AddRequestComponent } from './client-request/add-request/add-request.component';
import { UpdateRequestComponent } from './client-request/update-request/update-request.component';

import { UpdateMaterialRequestComponent} from './project/project-material-request/update-material-request/update-material-request.component';
import { ViewMaterialRequestDetailsComponent} from './project/project-material-request/view-material-request-details/view-material-request-details.component';
import { BasketMaterialComponent } from './project/project-material-request/basket-material/basket-material.component';
import { UrgencyLevelComponent } from './project/project-material-request/urgency-level/urgency-level.component';
import { AddUrgencyLevelComponent } from './project/project-material-request/urgency-level/add-urgency-level/add-urgency-level.component';
import { UpdateUrgencyLevelComponent } from './project/project-material-request/urgency-level/update-urgency-level/update-urgency-level.component';
import { ReportComponent } from './report/report.component';
import { MaterialRequestReportViewComponent } from './report/material-request-report-view/material-request-report-view.component';
import { RequestcountreportComponent } from './report/requestcountreport/requestcountreport.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Component } from '@angular/core';
import {UploadVehiclePhotoComponent} from './vehicle/upload-vehicle-photo/upload-vehicle-photo.component';


import { ProjectMaterialRequestComponent} from './project/project-material-request/project-material-request.component';
import { UnassignedVehicleViewComponent } from './vehicle/unassigned-vehicle-view/unassigned-vehicle-view.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ApprovedRequestReportViewComponent } from './report/approved-request-report-view/approved-request-report-view.component';
import { DemoUtilsModule } from '../app/demo-utils/module';
import { NgChartsModule } from 'ng2-charts';

import jwt_decode from "jwt-decode";

import { ConstructionSiteComponent } from './project/construction-site/construction-site.component';
import { AddConstructionSiteComponent } from './project/construction-site/add-construction-site/add-construction-site.component';
import { UpdateConstructionSiteComponent } from './project/construction-site/update-construction-site/update-construction-site.component';

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatListModule
];

// import { AddSaftyChecklistItemsComponent } from './safty-checklist/safty-checklist-catagory/safty-checklist-items/add-safty-checklist-items/add-safty-checklist-items.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { WarehouseEquipmentComponent } from './warehouse/warehouse-equipment/warehouse-equipment.component';
import { AddWarehouseEquipmentComponent } from './warehouse/warehouse-equipment/add-warehouse-equipment/add-warehouse-equipment.component';
import { UpdateWarehouseEquipmentComponent } from './warehouse/warehouse-equipment/update-warehouse-equipment/update-warehouse-equipment.component';
import { AllocateVehicleComponent } from './vehicle/allocate-vehicle/allocate-vehicle.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserRoleComponent } from './user/userrole/add-user-role/add-user-role.component';
import { UpdateUserRoleComponent } from './user/userrole/update-user-role/update-user-role.component';
import { UserRoleComponent } from './user/userrole/user-role.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; //matSelectionList
import {MatSelectionList} from '@angular/material/list/selection-list';
import { AddSupplierOrderComponent } from './supplier/supplier-order/add-supplier-order/add-supplier-order.component';
import { CancelOrderComponent } from './supplier/supplier-order/cancel-order/cancel-order.component';
import { EmployeeAttendanceComponent } from './employee/employee-attendance/employee-attendance.component';
import { ItemsComponent } from './safty-checklist/items/items.component';
import { AddItemsComponent } from './safty-checklist/items/add-items/add-items.component';
import { UpdateItemsComponent } from './safty-checklist/items/update-items/update-items.component';
import { ReportingComponent } from './reporting/reporting.component';
import { OrdersPerSupplierReportComponent } from './reporting/orders-per-supplier-report/orders-per-supplier-report.component';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { AddSaftyChecklistCatagoryComponent } from './safty-checklist/safty-checklist-catagory/add-safty-checklist-catagory/add-safty-checklist-catagory.component';
import { UpdateSaftyChecklistCatagoryComponent } from './safty-checklist/safty-checklist-catagory/update-safty-checklist-catagory/update-safty-checklist-catagory.component';


import { ReportsComponent } from './reports/reports.component';
import { IncidentReportComponent } from './reports/incident-report/incident-report.component';
import { StockTakeComponent } from './warehouse/stock-take/stock-take.component';
import { UpdateStockTakeComponent } from './warehouse/stock-take/update-stock-take/update-stock-take.component';
import { AddStockTakeComponent } from './warehouse/stock-take/add-stock-take/add-stock-take.component';
import { DeliveryNoteComponent } from './project/delivery-note/delivery-note.component';
import { AddDeliveryNoteComponent } from './project/delivery-note/add-delivery-note/add-delivery-note.component';
import { UpdateDeliveryNoteComponent } from './project/delivery-note/update-delivery-note/update-delivery-note.component';
import { MaterialRequestStatusComponent } from './project/material-request-status/material-request-status.component';
import { AddMaterialRequestStatusComponent } from './project/material-request-status/add-material-request-status/add-material-request-status.component';
import { UpdateMaterialRequestStatusComponent } from './project/material-request-status/update-material-request-status/update-material-request-status.component';
import { ProjectEquipmentComponent } from './equipment/project-equipment/project-equipment.component';
import { AddProjectEquipmentComponent } from './equipment/project-equipment/add-project-equipment/add-project-equipment.component';
import { UpdateProjectEquipmentComponent } from './equipment/project-equipment/update-project-equipment/update-project-equipment.component';
import { VehicleBrandComponent } from './vehicle/vehicle-brand/vehicle-brand.component';
import { VehicleTypeComponent } from './vehicle/vehicle-type/vehicle-type.component';
import { UpdateVehicleBrandComponent } from './vehicle/vehicle-brand/update-vehicle-brand/update-vehicle-brand.component';
import { AddVehicleBrandComponent } from './vehicle/vehicle-brand/add-vehicle-brand/add-vehicle-brand.component';
import { AddVehicleTypeComponent } from './vehicle/vehicle-type/add-vehicle-type/add-vehicle-type.component';
import { UpdateVehicleTypeComponent } from './vehicle/vehicle-type/update-vehicle-type/update-vehicle-type.component';
import { VehicleModelComponent } from './vehicle/vehicle-model/vehicle-model.component';
import { AddVehicleModelComponent } from './vehicle/vehicle-model/add-vehicle-model/add-vehicle-model.component';
import { UpdateVehicleModelComponent } from './vehicle/vehicle-model/update-vehicle-model/update-vehicle-model.component';
import { ReceiveOrderComponent } from './supplier/supplier-order/receive-order/receive-order.component';
import { AddSaftyChecklistComponent } from './safty-checklist/add-safty-checklist/add-safty-checklist.component';
import { OtpComponent } from './login/otp/otp.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ProjectIncidentComponent } from './project/project-incident/project-incident.component';
import { AddProjectIncidentComponent } from './project/project-incident/add-project-incident/add-project-incident.component';
import { UpdateProjectIncidentComponent } from './project/project-incident/update-project-incident/update-project-incident.component';
import { ProjectTaskComponent } from './project/project-task/project-task.component';
import { TaskStatusComponent } from './project/project-task/task-status/task-status.component';

import {AddTaskComponent} from './project/project-task/add-task/add-task.component';
import {UpdateTaskComponent} from './project/project-task/update-task/update-task.component';

import {TaskTypeComponent} from './project/project-task/task-type/task-type.component';
import { AddTaskStatusComponent } from './project/project-task/task-status/add-task-status/add-task-status.component';
import { UpdateTaskStatusComponent } from './project/project-task/task-status/update-task-status/update-task-status.component';

import {AddTaskTypeComponent} from './project/project-task/task-type/add-task-type/add-task-type.component';
import {UpdateTaskTypeComponent} from './project/project-task/task-type/update-task-type/update-task-type.component';
import { BackUpDatabaseComponent } from './back-up-database/back-up-database.component';
import { UpdateRequestStatusComponent } from './project/project-material-request/update-request-status/update-request-status.component';
import { ConfirmDialogComponent } from './back-up-database/confirm-dialog/confirm-dialog.component';
import {ManageTaskStatusComponent}  from './project/project-task/task-status/manage-task-status/manage-task-status.component';
import { SelectForemanViewComponent } from './vehicle/unassigned-vehicle-view/select-foreman-view/select-foreman-view.component';
import { AssignedVehiclesViewComponent } from './vehicle/assigned-vehicles-view/assigned-vehicles-view.component';
import { ConfirmAssignmentRemovalComponent } from './vehicle/assigned-vehicles-view/confirm-assignment-removal/confirm-assignment-removal.component';
import { ListOfTasksReportComponent } from './report/list-of-tasks-report/list-of-tasks-report.component';
import { ListOfIncidentsReportComponent } from './report/list-of-incidents-report/list-of-incidents-report.component';
import { ListOfVehiclesComponent } from './report/list-of-vehicles/list-of-vehicles.component';
import { TasksBetweenDatesReportComponent } from './report/tasks-between-dates-report/tasks-between-dates-report.component';
import { AllIncidentsComponent } from './report/all-incidents/all-incidents.component';
import { AllTaskReportComponent } from './report/all-task-report/all-task-report.component';
import { ProjectTasksComponent } from './report/project-tasks/project-tasks.component';
import { AllRequestControlReportComponent } from './report/all-request-control-report/all-request-control-report.component';
import { ProjectManagementReportComponent } from './report/project-management-report/project-management-report.component';
import { ProjectMaterialComponent } from './project/project-material/project-material.component';
import { AddProjectMaterialComponent } from './project/project-material/add-project-material/add-project-material.component';
import { ProjectBasketComponent } from './project/project-material/project-basket/project-basket.component';
import { TaskMaterialComponent } from './project/project-task/task-material/task-material.component';
import { AddTaskMaterialComponent } from './project/project-task/task-material/add-task-material/add-task-material.component';
import { ConfirmMaterialComponent } from './project/project-task/task-material/confirm-material/confirm-material.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { RequestNoteComponent } from './project/project-material-request/request-note/request-note.component';
import { HelpViewComponent } from './help-view/help-view.component';
import { EmployeeHelpComponent } from './help-view/employee-help/employee-help.component';
import { UserHelpComponent } from './help-view/user-help/user-help.component';
import { MaterialHelpComponent } from './help-view/material-help/material-help.component';
import { EquipmentHelpComponent } from './help-view/equipment-help/equipment-help.component';
import { VehicleHelpComponent } from './help-view/vehicle-help/vehicle-help.component';
import { ReportsHelpComponent } from './help-view/reports-help/reports-help.component';
import { IncidentHelpComponent } from './help-view/incident-help/incident-help.component';
import { SupplierHelpComponent } from './help-view/supplier-help/supplier-help.component';
import { SupplierOrderHelpComponent } from './help-view/supplier-order-help/supplier-order-help.component';
import { ProjectHelpComponent } from './help-view/project-help/project-help.component';
import { MaterialRequestHelpComponent } from './help-view/material-request-help/material-request-help.component';
import { ClientHelpComponent } from './help-view/client-help/client-help.component';
import { WarehouseHelpComponent } from './help-view/warehouse-help/warehouse-help.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    VehicleComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    HomeComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    UserComponent,
    AddUserRoleComponent,
     UpdateUserRoleComponent,
    UserRoleComponent,
    MaterialComponent,
    SupplierComponent,
    MaterialTypeComponent,
    SupplierTypeComponent,
    AddMaterialComponent,
    UpdateMaterialComponent,
    UpdateMaterialTypeComponent,
    AddMaterialTypeComponent,
    AddSupplierComponent,
    UpdateSupplierComponent,
    UpdateSupplierTypeComponent,
    AddSupplierTypeComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    IncidentComponent,
    EquipmentComponent,
    ProjectComponent,
    ClientComponent,
    WarehouseComponent,
    SupplierOrderComponent,
    AddEquipmentComponent,
    UpdateEquipmentComponent,
    UpdateWarehouseComponent,
    AddWarehouseComponent,
    AddClientComponent,
    UpdateClientComponent,
    UpdateProjectComponent,
    AddProjectComponent,
    AddIncidentComponent,
    UpdateIncidentComponent,
    TaskComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    TaskTypeComponent,
    AddTaskTypeComponent,
    UpdateTaskTypeComponent,
    ProjectStaffComponent,
    AddProjectStaffComponent,
    UpdateProjectStaffComponent,
    SaftyChecklistComponent,
    SaftyChecklistCatagoryComponent,
    AddSaftyChecklistCatagoryComponent,
    UpdateSaftyChecklistCatagoryComponent,
    ClientRequestComponent,
    AddRequestComponent,
    AddVehicleTypeComponent,
    UpdateRequestComponent,
    ProjectMaterialRequestComponent,
    UpdateMaterialRequestComponent,
    ViewMaterialRequestDetailsComponent,
    AddMaterialRequestComponent,
    BasketMaterialComponent,
    UrgencyLevelComponent,
    AddUrgencyLevelComponent,
    UpdateUrgencyLevelComponent,
    ReportComponent,
    MaterialRequestReportViewComponent,
    RequestcountreportComponent,
    UnassignedVehicleViewComponent,
    UploadVehiclePhotoComponent,
    ApprovedRequestReportViewComponent,
    WarehouseEquipmentComponent,
    AddWarehouseEquipmentComponent,
    UpdateWarehouseEquipmentComponent,
    AddSaftyChecklistCatagoryComponent,
    UpdateSaftyChecklistCatagoryComponent,
    AllocateVehicleComponent,
    AddSupplierOrderComponent,
    CancelOrderComponent,
    EmployeeAttendanceComponent,
    ItemsComponent,
    AddItemsComponent,
    UpdateItemsComponent,
    ReportingComponent,
    OrdersPerSupplierReportComponent,
    ReportsComponent,
    IncidentReportComponent,
    StockTakeComponent,
    UpdateStockTakeComponent,
    AddStockTakeComponent,
    DeliveryNoteComponent,
    AddDeliveryNoteComponent,
    UpdateDeliveryNoteComponent,
    ApprovedRequestReportViewComponent,
    MaterialRequestStatusComponent,
    AddMaterialRequestStatusComponent,
    UpdateMaterialRequestStatusComponent,
    ProjectEquipmentComponent,
    AddProjectEquipmentComponent,
    UpdateProjectEquipmentComponent,
    ConstructionSiteComponent,
    AddConstructionSiteComponent,
    UpdateConstructionSiteComponent,
    ViewProjectComponent,
    ProjectIncidentComponent,
    AddProjectIncidentComponent,
    UpdateProjectIncidentComponent,
    ProjectTaskComponent,
    TaskStatusComponent,
    AddTaskStatusComponent,
    UpdateTaskStatusComponent,
    BackUpDatabaseComponent,
    UpdateRequestStatusComponent,
    ConfirmDialogComponent,
    ManageTaskStatusComponent,
    SelectForemanViewComponent,
    AssignedVehiclesViewComponent,
    ConfirmAssignmentRemovalComponent,
    ListOfTasksReportComponent,
    ListOfIncidentsReportComponent,
    ListOfVehiclesComponent,
    TasksBetweenDatesReportComponent,
    AllIncidentsComponent,
    AllTaskReportComponent,
    ProjectTasksComponent,
    AllRequestControlReportComponent,
    ProjectManagementReportComponent,
    ProjectMaterialComponent,
    AddProjectMaterialComponent,
    ProjectBasketComponent,
    TaskMaterialComponent,
    AddTaskMaterialComponent,
    ConfirmMaterialComponent,
    VehicleBrandComponent,
    VehicleTypeComponent,
    UpdateVehicleBrandComponent,
    AddVehicleBrandComponent,
    UpdateVehicleTypeComponent,
    AddVehicleModelComponent,
    VehicleModelComponent,
    UpdateVehicleModelComponent,
    ReceiveOrderComponent,
    AddSaftyChecklistComponent,
    OtpComponent,
    AuditTrailsComponent,
    RequestNoteComponent,
    HelpViewComponent,
    EmployeeHelpComponent,
    UserHelpComponent,
    MaterialHelpComponent,
    EquipmentHelpComponent,
    VehicleHelpComponent,
    ReportsHelpComponent,
    IncidentHelpComponent,
    SupplierHelpComponent,
    SupplierOrderHelpComponent,
    ProjectHelpComponent,
    MaterialRequestHelpComponent,
    ClientHelpComponent,
    WarehouseHelpComponent

  ],

  imports: [
    BrowserModule,
    FilterPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule,
    FlexLayoutModule,

    MatTooltipModule,
    MatProgressBarModule,
    MatListModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule,
    MatCheckboxModule,
    MatExpansionModule,


  ],
  providers: [
    ServiceService,
    MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

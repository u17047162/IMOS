import { ConstructionSite, project, ServiceService } from './../services/service.service';
import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import {  request } from './../services/service.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProjectMaterialRequestComponent} from './project-material-request/project-material-request.component';
import {ProjectIncidentComponent} from './project-incident/project-incident.component';

import {ConstructionSiteComponent} from './construction-site/construction-site.component';
import {TaskStatusComponent} from './project-task/task-status/task-status.component';


import {
  ChangeDetectionStrategy,

  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfMonth,
  startOfWeek,
  endOfWeek,
format,

} from 'date-fns';
import { Subject, Observable } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { HttpParams } from '@angular/common/http';
import { colors } from '../demo-utils/colors';
import { UrgencyLevelComponent } from './project-material-request/urgency-level/urgency-level.component';
import { MaterialRequestStatusComponent } from './material-request-status/material-request-status.component';
import { TaskTypeComponent} from './project-task/task-type/task-type.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ProjectMaterialComponent } from './project-material/project-material.component';







function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';

  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}


export interface Project {

  id:number;
  request: string;
  projectId: number,
  name:string,
  constructionsiteId: number,
  initialrequestId: number,
  safetyfilecreated: boolean,
  constructionsite: string,
  initialrequest: string,
  deliveries: [],
  invoices: [],
  projectemployees: [],
  projectequipments: [],
  projectmaterialrequests: [],
  projectmaterials: [],
  safetyfilechecklists: []
}

interface ProjectMaterialRequest{
  materialRequestId: number,
  projectId: number,
  urgencyLevelName: string,
  requestDate :string,
  statusName:string,
  statusUpdateDate: string,
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  template:' {{data.id}}',
})
export class ProjectComponent implements OnInit {
//calendar settings
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;


  viewDate: Date = new Date();

  endDate: Date = new Date();

  events$: Observable<CalendarEvent<{requestList:ProjectMaterialRequest}>[]>

  activeDayIsOpen: boolean = false;


  refresh = new Subject<void>();










  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

//calendar settings






  SiteList: ConstructionSite[] = [];
  requestList: request[] = [];

  // API Test
  info: project[] = [];

  displayedColumns: string[] = ['name', 'constructionSite', 'request', 'actions'];

  dataSource!: MatTableDataSource<project>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;
  //typelist: materialType[] = [];

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private route: Router,
    private service: ServiceService,
     private _snackBar: MatSnackBar) {
    this.GetAllProjects();
  }


  ngOnInit(): void {
    //this.service.getMaterialType().subscribe(x => { this.typelist = x; console.log("typelist", this.typelist) });
    this.fetchEvents();
    this.service.getConstructionSite().subscribe(x => {this.SiteList = x; console.log("Sitelist" , this.SiteList)});
    //this.service.getRequeast().subscribe();

  }

  fetchEvents(): void
  {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay,
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay,
    }[this.view];

    const params = new HttpParams()
    .set(
      'requestDate',
      format(getStart(this.viewDate), 'yyyy-MM-dd')
    )


    this.events$ = this.service.CalendarViewRequest()
    .pipe(
      map((  request : {
        map: any; request: ProjectMaterialRequest[]
} )  => {

        return request.map((requestList: ProjectMaterialRequest) => {
          console.log(requestList)
          if(requestList.statusName==="Pending")
          {
            console.log("peding this side only")

            return{
              title: requestList.statusName +  "," + " "+    requestList.urgencyLevelName,
              start: new Date(
                requestList.requestDate
              ),
              end: new Date(
                requestList.statusUpdateDate
              ),
              actions:[
                {
                  label: '<i class="fas fa-fw fa-pencil-alt"></i>',
                  onclick: (requestList: CalendarEvent): void =>{
                    console.log('Edit event', requestList);

                  }
                }
              ],
              color: colors.blue,
              allDay: true,
              meta:{
                requestList,
              },
            };
          }

          else
          return {
              title: requestList.statusName +  "," + " "+    requestList.urgencyLevelName,
              start: new Date(
                requestList.requestDate
              ),
              end: new Date(
                requestList.statusUpdateDate
              ),
              color: colors.green,
              allDay: true,
              meta:{
                requestList,
              },
            };
        });
      })
    );
  }

  dayClicked({
    date,
    events
  }:{
    date:Date;
    events: CalendarEvent<{requestList: ProjectMaterialRequest}>[];
  }): void
  {

    if(isSameMonth(date,this.viewDate)){

      if(
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen ===true) ||
        events.length === 0
        )
        {
          this.activeDayIsOpen = false;
        }
        else{
          this.activeDayIsOpen = true;
        this.viewDate = date;
        }

    }
  }

  eventClicked(event: CalendarEvent<{requestList: ProjectMaterialRequest}>): void{

  }



  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ProjectMaterialRequestComponent, {
      data:{id},
      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(id);
      this.GetAllProjects();

    });
  }


  openConstructionSite(): void {
    const dialogRef = this.dialog.open(ConstructionSiteComponent, {

      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {

      this.GetAllProjects();

    });
  }

  openTaskStatus(): void {
    const dialogRef = this.dialog.open(TaskStatusComponent, {

      width: '40%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {

      this.GetAllProjects();

    });
  }

  openTaskType(): void {
    const dialogRef = this.dialog.open(TaskTypeComponent, {

      width: '80%',
      height:'90%'
    }
    );

    dialogRef.afterClosed().subscribe(result => {

      this.GetAllProjects();

    });
  }




  openIncidents(id: number): void {
    const dialogRef = this.dialog.open(ProjectIncidentComponent, {
      data:{id},
      width: '50%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {

      this.GetAllProjects();

    });
  }

  openProjectMaterial(id: number): void {
    const dialogRef = this.dialog.open(ProjectMaterialComponent, {
      data:{id},
      width: '50%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {

      this.GetAllProjects();

    });
  }


  openTaskdialog(id: number): void {
    const dialogRef = this.dialog.open(ProjectTaskComponent, {
      data:{id},
      width: '80%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {

      this.GetAllProjects();

    });
  }



  GetAllProjects() {
    this.service.getProject().subscribe(x => {
      this.info = x;
      console.log(x);
      this.posts = x;

      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.data);

    })
  }

  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  UpdateProject(id:number) {
    this.route.navigate(['updateProject',id])
  }

  addProject() {
    this.route.navigateByUrl('/addProject')
  }

  deleteProject(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Project?')) {
      this.service.deleteProject(id).subscribe(res => {
        this.GetAllProjects();
        this._snackBar.open("Success, you have deleted a Project!", 'OK', {
          duration: 3000,
          verticalPosition: 'bottom',
        });
      });
    }
  }

  projectstaff(){
    this.route.navigateByUrl('projectstaff')
  }
  deliveryNote(){
    this.route.navigateByUrl('DeliveryNote');
  }

ViewRequests(){

this.service.getMaterialRequest()
.subscribe(result => {

  result.forEach((element: { results: CalendarEvent<any>; }) => {

    //this.events..push(element.results)

  });

  console.log(this.events$)
})

}
openRequestStatusDialog(): void {
  const dialogRef = this.dialog.open(MaterialRequestStatusComponent
    , {
    width: '50%',
    height:'70%',
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.GetAllProjects();
  });
}
openUrgencyDialog(): void {
  const dialogRef = this.dialog.open(UrgencyLevelComponent
    , {
    width: '50%',
    height:'60%',
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.GetAllProjects();

  });
}

openDialogMatRequest(id: number): void {
  const dialogRef = this.dialog.open(ProjectMaterialRequestComponent, {
    data:{id},
    width: '80%',
    height:'90%'
  }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(id);
    this.GetAllProjects();

  });
}

ViewProjectInfo(){
}
projectmaterial(){
  
}





}

import { incident, material, ProjectMaterial, projectDetails } from './../../services/service.service';

import { ChartData, ChartOptions} from 'chart.js';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService,requestcount,ProjectMaterialRequest } from 'src/app/services/service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import jspdf, { jsPDF } from 'jspdf';

import { DatePipe } from '@angular/common';




//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { elementAt, map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-management-report',
  templateUrl: './project-management-report.component.html',
  styleUrls: ['./project-management-report.component.css'],
  providers: [DatePipe]
})
export class ProjectManagementReportComponent implements OnInit {

cardData: any;

  displayedColumns: string[] = ['description','tasktypeDescription','startdate','enddate','statusName'];

  dataSource!: MatTableDataSource<Task>;

  projectmaterialdata : ProjectMaterial[] = [] ;

displayedColumnsProjmaterial: string[] = ['materialName','materialTypeName','typeDescription', 'quantity'];

ProjMaterialdataSource!: MatTableDataSource<ProjectMaterial>;



//projec details

ProjectdisplayedColumns: string[] = ['name','request','constructionsite','clientName','clientEmail'];

ProjectdataSource!: MatTableDataSource<projectDetails>;




  displayedIncidentColumns: string[] = ['description','date'];

  IncidentdataSource!: MatTableDataSource<incident>;
  Incidents:incident[] =[];

  displayedRequestColumns: string[] = ['urgencylevelName','RequestDate', 'statusName','statusUpdateDate'];

  RequestdataSource!: MatTableDataSource<ProjectMaterialRequest>;


  requestData: ProjectMaterialRequest[];


  @ViewChild('htmlData') htmlData!:ElementRef;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  @ViewChild(MatSort) sort!: MatSort

  TotalTasks :number;

  posts: any;
  incidentdata:any;
  projmaterialData: any;
  projectData:any;

  chartsLoaded:boolean = false;
  RequestchartsLoaded:boolean = false;
  myDate = new Date();
  TotalRequests: number;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar,
      private MatDialog: MatDialogRef<ProjectManagementReportComponent>,)
      {  this.getDashboard(); }


      TaskCountData:ChartData<'bar'> ={
        labels: [],
        datasets: [
          { data: [],
            label: 'Complete Tasks',
            backgroundColor: [
             'rgb(0, 255, 0)',

            ]
          },
          {
            data: [],
            label: 'Incomplete Tasks',
            backgroundColor: ['rgb(22, 99, 200)',]
          },
          {
            data: [],
            label: 'Discountinued Tasks',
            backgroundColor: ['rgb(255, 0, 0)',]
          }
        ],
      };


      RequestCountData:ChartData<'bar'> ={
        labels: [],
        datasets: [
          { data: [],
            label: 'Approved Material Request',
            backgroundColor: [
             'rgb(0, 255, 0)',

            ]
          },
          {
            data: [],
            label: 'Declined Material Request ',
            backgroundColor: ['rgb(255, 0, 0)',]
          },
          {
            data: [],
            label: 'Pending Material Request',
            backgroundColor: ['rgb(22, 99, 200)',]

          }
        ],
      };






      TaskCountOptions: ChartOptions = {
        responsive: true,
        plugins: {
          title: {
            display:true,
            text:'# Project Tasks',
          },
        },
      };

      RequestCountOptions: ChartOptions = {
        responsive: true,
        plugins: {
          title: {
            display:true,
            text:'# Project Material Requests',
          },
        },
      };


      MaterialCompData:ChartData<'bar'> ={
        labels: [],
        datasets: [
          { data: [],
            backgroundColor: ['rgb(105,105,105)',
             'rgb(0, 255, 0)','rgb(22, 99, 200)'
             ,'rgb(255, 0, 0)','rgb(159, 22, 128)',
             'rgb(255,215,0)'

            ]

          },

        ],
      };

      ProjectMaterialData:ChartData<'bar'> ={
        labels: [],
        datasets: [
          { data: [],
            backgroundColor: ['rgb(105,105,105)',
             'rgb(0, 255, 0)','rgb(22, 99, 200)'
             ,'rgb(255, 0, 0)','rgb(159, 22, 128)',
             'rgb(255,215,0)'

            ]

          },

        ],
      };


      MaterialCompOptions: ChartOptions = {
        responsive: true,
        plugins: {
          title: {
            display:true,
            text:'# Total Material In Approved Material Request ',
          },
        },
      };


      ProjectMaterialOptions: ChartOptions = {
        responsive: true,
        plugins: {
          title: {
            display:true,
            text:'# Material In Project Material  ',
          },
        },
      };






      getDashboard(){
        this.service.getTasksByProjectfinal(this.data.id)
        .subscribe(x => {
          console.log(x);
          this.posts = x;
          this.dataSource = new MatTableDataSource(this.posts)

                  this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
        })


        console.log(this.data.id);
        this.service.getProjectMateiralReport(this.data.id)
        .subscribe(x=> {

          this.projmaterialData = x;

          this.ProjMaterialdataSource = new MatTableDataSource(this.projmaterialData)

          this.ProjMaterialdataSource.paginator = this.paginator;
        this.ProjMaterialdataSource.sort = this.sort;
        })

        this.service.getProjectDetailsReport(this.data.id)
        .subscribe(x=> {

          this.projectData = x;

          this.ProjectdataSource = new MatTableDataSource(this.projectData)

          this.ProjectdataSource.paginator = this.paginator;
        this.ProjectdataSource.sort = this.sort;
        })





        this.service.getMaterialRequestByProject(this.data.id)
        .subscribe(x=> {

          this.requestData = x;

          this.RequestdataSource = new MatTableDataSource(this.requestData)

          this.RequestdataSource.paginator = this.paginator;
        this.RequestdataSource.sort = this.sort;
        })


        let tasks: number[] =[];


        this.service.getProjectTaskCount(this.data.id)


        .subscribe(result => {

            result.forEach((Deep: any) => {
              Deep.forEach((Deeper: any) => {
                Deep.forEach((element: { taskStatusName: string; completeTasksCount: number;incompleteTasksCount:number;discontinuedTasksCount:number;TotalTasks:number; } ) => {
                  this.TaskCountData.labels?.push(element.taskStatusName)
                  this.TaskCountData.datasets[0].data.push(element.completeTasksCount)
                  this.TaskCountData.datasets[1].data.push(element.incompleteTasksCount)
                  this.TaskCountData.datasets[2].data.push(element.discontinuedTasksCount)
                  this.TotalTasks = element.discontinuedTasksCount;

                });

              });
            });

          this.chartsLoaded = true;

        }, (reponsive: HttpErrorResponse) => {
          if (reponsive.status === 500){
            this.snackBar.open(reponsive.error, 'X', {duration:5000})
          }
        })

        this.service.getRequestStatusCount(this.data.id)
        .subscribe(result => {

           console.log(result)
          result.forEach((Deep: any) => {
            Deep.forEach((Deeper: any) => {
              Deep.forEach((element: { requestStatusName: string; approvedRequest: number;declindedRequest:number;pendingRequest:number;totalRequest:number; } ) => {
                this.RequestCountData.labels?.push(element.requestStatusName)
                this.RequestCountData.datasets[0].data.push(element.approvedRequest)
                this.RequestCountData.datasets[1].data.push(element.declindedRequest)
                this.RequestCountData.datasets[2].data.push(element.pendingRequest)
                this.TotalRequests = element.totalRequest;

              });

            });
          });
            this.RequestchartsLoaded = true;
        }, (reponsive: HttpErrorResponse) => {
          if (reponsive.status === 500){
            this.snackBar.open(reponsive.error, 'X', {duration:5000})
          }
        })


        this.service.getMaterialCompositonCount()
        .subscribe(result => {

          console.log(result)

          result.forEach((element: { materialName: string;  materialTotal:number;}) => {
            this.MaterialCompData.labels?.push(element.materialName)
            this.MaterialCompData.datasets[0].data.push(element.materialTotal)
          });

          this.chartsLoaded = true;

        }, (reponsive: HttpErrorResponse) => {
          if (reponsive.status === 500){
            this.snackBar.open(reponsive.error, 'X', {duration:5000})
          }
        })


        this.service.getProjectMaterialCount(this.data.id)
        .subscribe(result => {

          console.log(result)

          result.forEach((element: { materialName: string;  quantity:number;}) => {
            this.ProjectMaterialData.labels?.push(element.materialName)
            this.ProjectMaterialData.datasets[0].data.push(element.quantity)
          });

          this.chartsLoaded = true;

        }, (reponsive: HttpErrorResponse) => {
          if (reponsive.status === 500){
            this.snackBar.open(reponsive.error, 'X', {duration:5000})
          }
        })






        this.service.getProjectIncidentreport(this.data.id).subscribe(x => {
          this.Incidents =x ;
          this.incidentdata = x;

          this.IncidentdataSource = new MatTableDataSource(this.incidentdata)

            this.IncidentdataSource.paginator = this.paginator;
            this.IncidentdataSource.sort = this.sort;
        })




      }


      applyFilter(event: Event) {
        const FilterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage()
        }
      }

      public downloadPDF(): void {
        let DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
          let fileWidth = 208;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jspdf('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'JPEG', 0, position, fileWidth, fileHeight);
          PDF.save('Project Tasks Report.pdf');
        });
      }


  ngOnInit(): void {
  }

}

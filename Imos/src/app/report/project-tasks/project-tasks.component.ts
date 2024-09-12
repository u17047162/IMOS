import { material, task } from './../../services/service.service';

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
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css'],
  providers: [DatePipe]
})
export class ProjectTasksComponent implements OnInit {


  displayedColumns: string[] = ['description','tasktypeDescription','startdate','enddate','statusName'];

  dataSource!: MatTableDataSource<Task>;

  @ViewChild('htmlData') htmlData!:ElementRef;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  @ViewChild(MatSort) sort!: MatSort

  TotalTasks :number;

  posts: any;
  chartsLoaded:boolean = false;

  myDate = new Date();
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
     private service: ServiceService,
      private snackBar: MatSnackBar,
      private MatDialog: MatDialogRef<ProjectTasksComponent>,) {
        this.getTask();
      }

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



      TaskCountOptions: ChartOptions = {
        responsive: true,
        plugins: {
          title: {
            display:true,
            text:'# Project Tasks',
          },
        },
      };




      getTask(){
        this.service.getTasksByProjectfinal(this.data.id)
        .subscribe(x => {
          console.log(x);
          this.posts = x;
          this.dataSource = new MatTableDataSource(this.posts)

                  this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
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

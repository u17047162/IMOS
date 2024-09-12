import { map } from 'rxjs/operators';
import { ServiceService, incident } from './../../services/service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.css']
})
export class IncidentReportComponent implements OnInit {

  result: any;
  incident: any;
  project: any;
  chart: any = [];
  chart2: any = [];


  constructor(private service: ServiceService) {
    Chart.register(...registerables);
  }



  currentDate = new Date();

  ngOnInit(): void {

    this.service.getProject().subscribe(res => {
      this.project = res.map(res => res.projectId)
      //console.log(this.project);




      this.service.getInicdent().subscribe((res) => {
        this.incident = res.map(res => res.description)
        //console.log(this.incident);


        console.log(this.project);


        //Chart Bar
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.incident,
            datasets: [{
              label: 'Number of Incidents per Project',
              data: this.project,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },

          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })


        //Chart Cirlce
        this.chart2 = new Chart('canvas2', {
          type: 'doughnut',
          data: {
            labels: [
              'Tuks', 'UJ', 'WITS'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: this.project,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
        })
      })
    })
  }


  @ViewChild('htmlData') htmlData: ElementRef | any;


  public download(): void {
    let Data = document.getElementById('print')!;

    // Canvas Options
    html2canvas(Data).then((canvas: { height: number; width: number; toDataURL: (arg0: string) => any; }) => {
      let fileWidth = 296;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png')


      let PDF = new jsPDF({ orientation: 'l', unit: 'mm', format: 'a4', });
      let topPosition = 10;
      let leftPosition = 0;
      PDF.addImage(contentDataURL, 'PNG', leftPosition, topPosition, fileWidth, fileHeight)
      PDF.save('Incident-Report-Graph.pdf');
    });
  }
}

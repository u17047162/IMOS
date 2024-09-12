
import { ChartData, ChartOptions} from 'chart.js';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService,requestcount } from 'src/app/services/service.service';

import jspdf from 'jspdf';

//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-requestcountreport',
  templateUrl: './requestcountreport.component.html',
  styleUrls: ['./requestcountreport.component.css']
})
export class RequestcountreportComponent implements OnInit {
  chartsLoaded:boolean = false;
  RequestCount:any[] = []


  @ViewChild('htmlData') htmlData!:ElementRef;

  constructor(private snackBar: MatSnackBar,
    private service: ServiceService) { }




    requestCountData:ChartData<'bar'> ={
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



    requestCountOptions: ChartOptions = {
      responsive: true,
      plugins: {
        title: {
          display:true,
          text:'# Material Request By Client/Project',
        },
      },
    };

    CompileRequestCountDashboard()
    {

      this.service.getMaterialRequetsCount()
      .subscribe(result => {

        console.log(result)

        result.forEach((element: { clientName: string; count: number; }) => {
          this.requestCountData.labels?.push(element.clientName)
          this.requestCountData.datasets[0].data.push(element.count)
        });

        this.chartsLoaded = true;

      }, (reponsive: HttpErrorResponse) => {
        if (reponsive.status === 500){
          this.snackBar.open(reponsive.error, 'X', {duration:5000})
        }
      })

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
        PDF.save('Request_Count_Per_Client/Project.pdf');
      });
    }


  ngOnInit(): void {

    this.CompileRequestCountDashboard()

  }

}

import { WarehouseHelpComponent } from './warehouse-help/warehouse-help.component';
import { ClientHelpComponent } from './client-help/client-help.component';
import { MaterialRequestHelpComponent } from './material-request-help/material-request-help.component';
import { ProjectHelpComponent } from './project-help/project-help.component';
import { SupplierOrderHelpComponent } from './supplier-order-help/supplier-order-help.component';
import { SupplierHelpComponent } from './supplier-help/supplier-help.component';
import { IncidentHelpComponent } from './incident-help/incident-help.component';
import { VehicleHelpComponent } from './vehicle-help/vehicle-help.component';
import { EquipmentHelpComponent } from './equipment-help/equipment-help.component';
import { MaterialHelpComponent } from './material-help/material-help.component';
import { UserHelpComponent } from './user-help/user-help.component';
import { EmployeeHelpComponent } from './employee-help/employee-help.component';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddProjectMaterialComponent } from '../project/project-material/add-project-material/add-project-material.component';
import { ServiceService } from '../services/service.service';
import { ReportsHelpComponent } from './reports-help/reports-help.component';
@Component({
  selector: 'app-help-view',
  templateUrl: './help-view.component.html',
  styleUrls: ['./help-view.component.css']
})
export class HelpViewComponent implements OnInit {

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }





  users: any[] = [
    { name: ' 1. Employee', description:'Add employee',},
     { name: '2. User' },
     { name: '3. Material' },
     { name: '4. Equipment' },
     { name: '5. Vehicle' },
     { name: '6. Reports' },
     { name: '7. Incident' },
     { name: '8. Supplier' },
     { name: '9. Supplier Order' },
     { name: '10. Project' },
     { name: '11. Material Request' },
     { name: '12. Client' },
     { name: '13. Warehouse' },

    ];
  userFilter: any = { name: '' };


  openEmpolyeeHelp(): void {
    const dialogRef = this.dialog.open(EmployeeHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openUserHelp(): void {
    const dialogRef = this.dialog.open(UserHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openMaterialHelp(): void {
    const dialogRef = this.dialog.open(MaterialHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openEquipmentHelp(): void {
    const dialogRef = this.dialog.open(EquipmentHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openVehicleHelp(): void {
    const dialogRef = this.dialog.open(VehicleHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openReportsHelp(): void {
    const dialogRef = this.dialog.open(ReportsHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }


  openIncidentHelp(): void {
    const dialogRef = this.dialog.open(IncidentHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openSupplierHelp(): void {
    const dialogRef = this.dialog.open(SupplierHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

  openSupplierOrderHelp(): void {
    const dialogRef = this.dialog.open(SupplierOrderHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }


  openProjectHelp(): void {
    const dialogRef = this.dialog.open(ProjectHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }



  openMaterialRequestHelp(): void {
    const dialogRef = this.dialog.open(MaterialRequestHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }



  openClientHelp(): void {
    const dialogRef = this.dialog.open(ClientHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }


  openWarehouseHelp(): void {
    const dialogRef = this.dialog.open(WarehouseHelpComponent, {
      width: '70%',
      height:'90%',

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }





  onClick(name: string){
    console.log(name)



    if(name == this.users[0].name)
    {
this.openEmpolyeeHelp();
    }
else
 if(name == this.users[1].name)
 {
this.openUserHelp();
 }

 else
 if(name == this.users[2].name)
 {
this.openMaterialHelp();
 }

 else
 if(name == this.users[3].name)
 {
this.openEquipmentHelp();
 }

 else
 if(name == this.users[4].name)
 {
this.openVehicleHelp();
 }

 else
 if(name == this.users[5].name)
 {
this.openReportsHelp();
 }

 else
 if(name == this.users[6].name)
 {
this.openIncidentHelp();
 }

 else
 if(name == this.users[7].name)
 {
this.openSupplierHelp();
 }

 else
 if(name == this.users[8].name)
 {
this.openSupplierOrderHelp();
 }

 else
 if(name == this.users[9].name)
 {
this.openProjectHelp();
 }

 else
 if(name == this.users[10].name)
 {
this.openMaterialRequestHelp();
 }


 else
 if(name == this.users[11].name)
 {
this.openClientHelp();
 }


 else
 if(name == this.users[12].name)
 {
this.openWarehouseHelp();
 }

  }

}

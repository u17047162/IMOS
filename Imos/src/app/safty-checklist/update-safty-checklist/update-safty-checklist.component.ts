import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { project, safetyItem, safetyitemcategory, ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-safty-checklist',
  templateUrl: './update-safty-checklist.component.html',
  styleUrls: ['./update-safty-checklist.component.css']
})
export class UpdateSaftyChecklistComponent implements OnInit {

  alert: boolean = false;
  panelOpenState = false;
  updateForm:FormGroup;
  SafetyItems:safetyItem[]=[];
  TypeList:project[]=[];
 CategoryTypes:safetyitemcategory[]=[];
  constructor( private fb: FormBuilder, private _service:ServiceService, private route: Router ) { }

  ngOnInit(): void {
  }
  closeAlert() {
    this.alert = false;
  }
  back(){
    this.route.navigateByUrl("project")
  }

}

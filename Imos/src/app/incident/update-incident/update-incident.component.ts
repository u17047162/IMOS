import { incident } from './../../services/service.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AbstractControlOptions, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-incident',
  templateUrl: './update-incident.component.html',
  styleUrls: ['./update-incident.component.css']
})
export class UpdateIncidentComponent implements OnInit {

  id!: number;
  public incidentFrm!: FormGroup;
  alert: boolean = false;
  @Input() type: any;
  Incident!:incident;
  
  constructor(private service: ServiceService,
    private routed: ActivatedRoute,
    private route: Router,
    private _snackbar: MatSnackBar,
    private fb: FormBuilder,
    private http: HttpClient,) { }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};

    this.incidentFrm = this.fb.group({
      description: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,100}"), Validators.maxLength(100)]],
    })
    this.id = +this.routed.snapshot.params['id'];
    this.service.getIncidentById(this.id).subscribe((res: any) => {
      this.Incident = res;
      console.log(this.Incident);
      this.incidentFrm = this.fb.group({
        description: [this.Incident.description, [Validators.required, Validators.pattern("[A-Za-z ]{1,100}"), Validators.maxLength(100)]],
      }, formOptions)
    });
  }

  updateIncident() {
    this.service.editIncident(this.routed.snapshot.params['id'], this.incidentFrm.value).subscribe(
      res => {
        if (confirm('Are you sure you want to Update this Incident?')) {
          this._snackbar.open("Success, you have Update a Incident!", 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
      })
  }

  get formdet() {
    return this.incidentFrm.controls;
  }


  back() {
    this.route.navigateByUrl('incident')
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.incidentFrm.controls[controlName].hasError(errorName);
  }


}

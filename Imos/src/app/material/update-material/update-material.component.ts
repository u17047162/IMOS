import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Material } from '../material.component';
import { materialtype, ServiceService, supplier, warehouse } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {
  Material!: Material;
  id!: number;
  TypeList: materialtype[] = [];
  SupplierList: supplier[] = [];
  WarehouseTypes: warehouse[] = [];
  alert: boolean = false;
  updateForm: FormGroup;
  constructor(private fb: FormBuilder, private _service: ServiceService,
    private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {};
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("[A-Za-z ]{1,25}"), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.maxLength(40)]],
      materialtypeId: ['', [Validators.required]],
      warehouseId: ['', [Validators.required]],
      supplierId: ['', [Validators.required]],
      quantity: ['', [Validators.required]],

    }, formOptions);
    this.id=+this.route.snapshot.params['id'];
    this._service. getMaterialById(this.id).subscribe((res:any)=>{
      this.Material=res;
      console.log(this.Material);
      this.updateForm=this.fb.group({
        materialtypeId:[this.Material.materialtypeId,[Validators.required]],
        name:[this.Material.name,[Validators.required]],
        description:[this.Material.description,[Validators.required]],
        warehouseId:[this.Material.name,[Validators.required]],
        supplierId:[this.Material.name,[Validators.required]],
      },formOptions)
    });
  }

  closeAlert() {
    this.alert = false;
  }

}

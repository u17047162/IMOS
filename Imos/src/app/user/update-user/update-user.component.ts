import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService, userrole, user, employee} from 'src/app/services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  data: userrole[] = [];
  employee: employee[] = [];
  updateForm!: FormGroup;
  posts: any;

  constructor(private fb: FormBuilder, private serviceManage: ServiceService, private router:Router) { }

  ngOnInit(): void {

    this.buildUpdateFormWithEmptyFields();

    this.serviceManage.getUserRole().subscribe(x => {
      this.data = x;
      console.log(this.data)
      this.posts = x
    });


    this.serviceManage.getEmployees().subscribe(y => {
      this.employee = y;
      console.log(this.employee)

    })
  }


  private buildUpdateFormWithEmptyFields() {
    this.updateForm = this.fb.group({
     /* Name: ['', [Validators.required]],*/

      userId: [''],
      userRole: ['',[Validators.required]],
      userName: ['',[Validators.required]],
      userPassword: ['',[Validators.required]],
      employeeId: ['', [Validators.required]]

    });
  }


  private buildUpdateForm(role: user) {
    this.updateForm = this.fb.group({
     /* Name: [role.name, [Validators.required]],*/

      Id: [role.userId]
    });
  }

  onUpdateSubmit(): void {
    if (this.updateForm.valid){
      let updateId = this.updateForm.get('userId')?.value as number;
      this.serviceManage.updateUser
    }
  }


}

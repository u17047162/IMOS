
import { Vehicle } from './../vehicle.component';
import { UploadFinishedEventArgs } from './../../services/service.service';


import { ServiceService, vehicle, vehicletype, user } from 'src/app/services/service.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Observable } from 'rxjs';

import {  EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-vehicle-photo',
  templateUrl: './upload-vehicle-photo.component.html',
  styleUrls: ['./upload-vehicle-photo.component.css'],
  template:' {{data.id}}',
})
export class UploadVehiclePhotoComponent implements OnInit {

 uploadform = this.fb.group({
   VehicleId: this.data.id,
   imageUrl: ['', [Validators.required]],
    file: new FormControl('',[Validators.required]),
  })


  myform = new FormGroup({
    fileSource: new FormControl('',[Validators.required])
  });


VehiclePhoto: any;



 validation:boolean;

  filePath: string;

  progress: number;
  message: string;
  @Output() public onUploadFinished = new EventEmitter();



  imageSrc: string = '';


vehicleImageUploadUrl = environment.endpointBase
      .concat("Uploads/Vehicles/Upload")


   acceptedExtensions = "jpg, jpeg, png, ";
  filereponse: UploadFinishedEventArgs;


  constructor( private fb: FormBuilder,
     private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
     private route: Router,
      private service: ServiceService,
       private _snackBar: MatSnackBar,
       private http: HttpClient) { }

  ngOnInit(): void {

  }

  /*private buildUploadForm() {
    this.uploadform = this.fb.group({
      VehicleId: ['',[Validators.required]],
      imageUrl: ['', [Validators.required]],
    });
  }*/







uploadFile = (files:any) => {

  if (files.length === 0) {
    return;
  }

  let fileToUpload = <File>files[0];
  const obj = new FormData();
  obj.append('file', fileToUpload, fileToUpload.name);


this.service.uploadVehiclePhoto(obj)
.subscribe({
  next: (event) => {
    if (event.type === HttpEventType.UploadProgress)
    this.progress = Math.round(100 * event.loaded/ event.total);

    else if (event.type === HttpEventType.Response){
      this.message = 'Upload success.';
     // let response = event.body as any;
     // this.myform.controls['fileSource'].setValue(response.filePath)

      console.log(this.myform.value)
    //  this._snackBar.open(`Upload success`, 'X', {duration: 5000});
      this.onUploadFinished.emit(event.body);
    }
  },
  error: (err: HttpErrorResponse) => console.log(err)
})


}

onFileChange(event:any) {
  const reader = new FileReader();

  if(event.target.files && event.target.files.length){
    const [file] = event.target.files;

    var pattern = /image-*/;

    reader.readAsDataURL(file);

    if (!file.type.match(pattern)) {
      this._snackBar.open("Invalid Format!. Only Images can be uploaded", 'OK', {
        duration: 7000,
        verticalPosition: 'bottom',
      });
      return;
    }

    else
     {

      reader.onload = () => {

        this.imageSrc = reader.result as string;
       // this.myform.controls['fileSource'].setValue(reader.result as string)




        this.uploadform.patchValue({
          imageUrl: reader.result as string
        });

        this.myform.patchValue({
          fileSource: reader.result as string
        });
       /* this.uploadform.patchValue({
          imageUrl:  reader.result as string,
        })*/

       // console.log(this.uploadform.value)
      }

      this.uploadFile(event.target.files);
    }
  }
}



UploadVehiclePhoto() {

 const finalform = {
    VehicleId: this.data.id,
    imageUrl: this.myform.controls['fileSource'].value,

  }

// console.log((finalform.imageUrl)?.toString())



 if(this.uploadform.valid)
 {
  this.service.uploadvehimg(finalform)
  .subscribe(() => {

    this._snackBar.open('Vehicle Image Uploaded successfully', 'Ok',{
      duration: 4000,
      verticalPosition: 'bottom',
    });
  })

}

else {
  this._snackBar.open('Select an image to upload', 'Ok',{
    duration: 4000,
    verticalPosition: 'bottom',
  });
}

}




}

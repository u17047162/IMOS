import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVehiclePhotoComponent } from './upload-vehicle-photo.component';

describe('UploadVehiclePhotoComponent', () => {
  let component: UploadVehiclePhotoComponent;
  let fixture: ComponentFixture<UploadVehiclePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadVehiclePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadVehiclePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

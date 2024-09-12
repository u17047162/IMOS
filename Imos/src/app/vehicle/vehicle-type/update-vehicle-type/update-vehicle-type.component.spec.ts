import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleTypeComponent } from './update-vehicle-type.component';

describe('UpdateVehicleTypeComponent', () => {
  let component: UpdateVehicleTypeComponent;
  let fixture: ComponentFixture<UpdateVehicleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

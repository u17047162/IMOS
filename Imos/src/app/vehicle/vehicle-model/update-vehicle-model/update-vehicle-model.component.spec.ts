import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleModelComponent } from './update-vehicle-model.component';

describe('UpdateVehicleModelComponent', () => {
  let component: UpdateVehicleModelComponent;
  let fixture: ComponentFixture<UpdateVehicleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

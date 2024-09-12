import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleModelComponent } from './add-vehicle-model.component';

describe('AddVehicleModelComponent', () => {
  let component: AddVehicleModelComponent;
  let fixture: ComponentFixture<AddVehicleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

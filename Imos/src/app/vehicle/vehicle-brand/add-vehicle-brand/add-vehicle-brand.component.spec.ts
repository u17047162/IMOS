import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleBrandComponent } from './add-vehicle-brand.component';

describe('AddVehicleBrandComponent', () => {
  let component: AddVehicleBrandComponent;
  let fixture: ComponentFixture<AddVehicleBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleBrandComponent } from './update-vehicle-brand.component';

describe('UpdateVehicleBrandComponent', () => {
  let component: UpdateVehicleBrandComponent;
  let fixture: ComponentFixture<UpdateVehicleBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

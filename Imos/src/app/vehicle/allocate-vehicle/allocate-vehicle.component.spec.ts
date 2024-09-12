import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateVehicleComponent } from './allocate-vehicle.component';

describe('AllocateVehicleComponent', () => {
  let component: AllocateVehicleComponent;
  let fixture: ComponentFixture<AllocateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedVehicleViewComponent } from './unassigned-vehicle-view.component';

describe('UnassignedVehicleViewComponent', () => {
  let component: UnassignedVehicleViewComponent;
  let fixture: ComponentFixture<UnassignedVehicleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedVehicleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedVehicleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

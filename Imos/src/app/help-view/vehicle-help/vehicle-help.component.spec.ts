import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHelpComponent } from './vehicle-help.component';

describe('VehicleHelpComponent', () => {
  let component: VehicleHelpComponent;
  let fixture: ComponentFixture<VehicleHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

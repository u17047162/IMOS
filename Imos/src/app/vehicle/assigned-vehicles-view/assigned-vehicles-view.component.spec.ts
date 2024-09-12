import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedVehiclesViewComponent } from './assigned-vehicles-view.component';

describe('AssignedVehiclesViewComponent', () => {
  let component: AssignedVehiclesViewComponent;
  let fixture: ComponentFixture<AssignedVehiclesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedVehiclesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedVehiclesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

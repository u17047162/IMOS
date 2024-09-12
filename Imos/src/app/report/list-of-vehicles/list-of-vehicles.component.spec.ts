import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfVehiclesComponent } from './list-of-vehicles.component';

describe('ListOfVehiclesComponent', () => {
  let component: ListOfVehiclesComponent;
  let fixture: ComponentFixture<ListOfVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

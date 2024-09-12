import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarehouseEquipmentComponent } from './add-warehouse-equipment.component';

describe('AddWarehouseEquipmentComponent', () => {
  let component: AddWarehouseEquipmentComponent;
  let fixture: ComponentFixture<AddWarehouseEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWarehouseEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWarehouseEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

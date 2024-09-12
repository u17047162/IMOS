import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWarehouseEquipmentComponent } from './update-warehouse-equipment.component';

describe('UpdateWarehouseEquipmentComponent', () => {
  let component: UpdateWarehouseEquipmentComponent;
  let fixture: ComponentFixture<UpdateWarehouseEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWarehouseEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWarehouseEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

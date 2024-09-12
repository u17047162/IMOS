import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseEquipmentComponent } from './warehouse-equipment.component';

describe('WarehouseEquipmentComponent', () => {
  let component: WarehouseEquipmentComponent;
  let fixture: ComponentFixture<WarehouseEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

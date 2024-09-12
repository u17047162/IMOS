import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentHelpComponent } from './equipment-help.component';

describe('EquipmentHelpComponent', () => {
  let component: EquipmentHelpComponent;
  let fixture: ComponentFixture<EquipmentHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

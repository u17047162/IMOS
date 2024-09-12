import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectEquipmentComponent } from './add-project-equipment.component';

describe('AddProjectEquipmentComponent', () => {
  let component: AddProjectEquipmentComponent;
  let fixture: ComponentFixture<AddProjectEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

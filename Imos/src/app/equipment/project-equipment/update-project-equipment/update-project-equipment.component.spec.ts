import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectEquipmentComponent } from './update-project-equipment.component';

describe('UpdateProjectEquipmentComponent', () => {
  let component: UpdateProjectEquipmentComponent;
  let fixture: ComponentFixture<UpdateProjectEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjectEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

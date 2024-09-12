import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEquipmentComponent } from './project-equipment.component';

describe('ProjectEquipmentComponent', () => {
  let component: ProjectEquipmentComponent;
  let fixture: ComponentFixture<ProjectEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

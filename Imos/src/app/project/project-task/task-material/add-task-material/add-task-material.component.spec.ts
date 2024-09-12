import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskMaterialComponent } from './add-task-material.component';

describe('AddTaskMaterialComponent', () => {
  let component: AddTaskMaterialComponent;
  let fixture: ComponentFixture<AddTaskMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMaterialComponent } from './task-material.component';

describe('TaskMaterialComponent', () => {
  let component: TaskMaterialComponent;
  let fixture: ComponentFixture<TaskMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeComponent } from './task-type.component';

describe('TaskTypeComponent', () => {
  let component: TaskTypeComponent;
  let fixture: ComponentFixture<TaskTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

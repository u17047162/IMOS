import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskTypeComponent } from './add-task-type.component';

describe('AddTaskTypeComponent', () => {
  let component: AddTaskTypeComponent;
  let fixture: ComponentFixture<AddTaskTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskTypeComponent } from './update-task-type.component';

describe('UpdateTaskTypeComponent', () => {
  let component: UpdateTaskTypeComponent;
  let fixture: ComponentFixture<UpdateTaskTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaskTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

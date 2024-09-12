import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksBetweenDatesReportComponent } from './tasks-between-dates-report.component';

describe('TasksBetweenDatesReportComponent', () => {
  let component: TasksBetweenDatesReportComponent;
  let fixture: ComponentFixture<TasksBetweenDatesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksBetweenDatesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksBetweenDatesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

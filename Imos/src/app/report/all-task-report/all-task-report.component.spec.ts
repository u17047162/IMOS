import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskReportComponent } from './all-task-report.component';

describe('AllTaskReportComponent', () => {
  let component: AllTaskReportComponent;
  let fixture: ComponentFixture<AllTaskReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTaskReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTaskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

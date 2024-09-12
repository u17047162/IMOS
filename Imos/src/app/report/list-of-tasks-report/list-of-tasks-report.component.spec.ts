import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTasksReportComponent } from './list-of-tasks-report.component';

describe('ListOfTasksReportComponent', () => {
  let component: ListOfTasksReportComponent;
  let fixture: ComponentFixture<ListOfTasksReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTasksReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfTasksReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

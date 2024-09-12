import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementReportComponent } from './project-management-report.component';

describe('ProjectManagementReportComponent', () => {
  let component: ProjectManagementReportComponent;
  let fixture: ComponentFixture<ProjectManagementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedRequestReportViewComponent } from './approved-request-report-view.component';

describe('ApprovedRequestReportViewComponent', () => {
  let component: ApprovedRequestReportViewComponent;
  let fixture: ComponentFixture<ApprovedRequestReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedRequestReportViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedRequestReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

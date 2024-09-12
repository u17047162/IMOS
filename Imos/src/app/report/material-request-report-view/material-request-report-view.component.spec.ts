import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestReportViewComponent } from './material-request-report-view.component';

describe('MaterialRequestReportViewComponent', () => {
  let component: MaterialRequestReportViewComponent;
  let fixture: ComponentFixture<MaterialRequestReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestReportViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRequestReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

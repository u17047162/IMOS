import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestControlReportComponent } from './all-request-control-report.component';

describe('AllRequestControlReportComponent', () => {
  let component: AllRequestControlReportComponent;
  let fixture: ComponentFixture<AllRequestControlReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestControlReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRequestControlReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

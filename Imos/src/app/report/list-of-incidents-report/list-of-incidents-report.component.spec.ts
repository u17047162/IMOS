import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfIncidentsReportComponent } from './list-of-incidents-report.component';

describe('ListOfIncidentsReportComponent', () => {
  let component: ListOfIncidentsReportComponent;
  let fixture: ComponentFixture<ListOfIncidentsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfIncidentsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfIncidentsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

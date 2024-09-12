import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcountreportComponent } from './requestcountreport.component';

describe('RequestcountreportComponent', () => {
  let component: RequestcountreportComponent;
  let fixture: ComponentFixture<RequestcountreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcountreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestcountreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

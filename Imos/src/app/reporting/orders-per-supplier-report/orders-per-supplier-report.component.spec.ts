import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPerSupplierReportComponent } from './orders-per-supplier-report.component';

describe('OrdersPerSupplierReportComponent', () => {
  let component: OrdersPerSupplierReportComponent;
  let fixture: ComponentFixture<OrdersPerSupplierReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPerSupplierReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPerSupplierReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

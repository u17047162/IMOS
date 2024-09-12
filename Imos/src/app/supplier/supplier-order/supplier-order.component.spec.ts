import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOrderComponent } from './supplier-order.component';

describe('SupplierOrderComponent', () => {
  let component: SupplierOrderComponent;
  let fixture: ComponentFixture<SupplierOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

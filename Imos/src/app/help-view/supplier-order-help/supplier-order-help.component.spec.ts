import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOrderHelpComponent } from './supplier-order-help.component';

describe('SupplierOrderHelpComponent', () => {
  let component: SupplierOrderHelpComponent;
  let fixture: ComponentFixture<SupplierOrderHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierOrderHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierOrderHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

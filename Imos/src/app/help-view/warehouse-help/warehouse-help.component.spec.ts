import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseHelpComponent } from './warehouse-help.component';

describe('WarehouseHelpComponent', () => {
  let component: WarehouseHelpComponent;
  let fixture: ComponentFixture<WarehouseHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

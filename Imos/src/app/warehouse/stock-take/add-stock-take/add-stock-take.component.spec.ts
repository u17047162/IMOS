import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockTakeComponent } from './add-stock-take.component';

describe('AddStockTakeComponent', () => {
  let component: AddStockTakeComponent;
  let fixture: ComponentFixture<AddStockTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockTakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

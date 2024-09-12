import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockTakeComponent } from './update-stock-take.component';

describe('UpdateStockTakeComponent', () => {
  let component: UpdateStockTakeComponent;
  let fixture: ComponentFixture<UpdateStockTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockTakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStockTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
